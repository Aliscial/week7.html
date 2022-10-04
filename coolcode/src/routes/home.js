import { Outlet } from "react-router-dom"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from "react-router-bootstrap"





class App extends React.Component {

    // Constructor 
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            list: [],
            newNote: "",
            DataisLoaded: false
        };
        this.addNote = this.addNote.bind(this);
        this.editNote = this.editNote.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
    }
    addNote(e) {
        this.setState({
            list: [...this.state.list, this.state.newNote],
            newNote: '',
        });
    }
    editNote(e, index) {
        this.setState(prevState => {
            const newList = prevState.list
            newList[index] = e.target.value
            return { list: newList }
        });
    }
    deleteNote(index) {
        this.setState({
            list: this.state.list.filter((_, i) => i !== index)
        });
    }

    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch(
            "https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div>;

        return (
            <Container>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <LinkContainer to="/"><Navbar.Brand>Fall Fashion Trends</Navbar.Brand></LinkContainer>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                                <LinkContainer to="/about"><Nav.Link>About</Nav.Link></LinkContainer>
                                <LinkContainer to="/results"><Nav.Link>Results</Nav.Link></LinkContainer>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>


                <Row>
                    <Col>
                        <h1>Fall Fashion Trends!</h1>
                    </Col>
                </Row>


                <table>
                    <thead>
                        <tr>
                            <th>Note</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.list.map((note, index) => (
                            <tr key={note + index}>
                                <td>
                                    <textarea onBlur={(e) => this.editNote(e, index)} defaultValue={note} />
                                </td>
                                <td>
                                    <Button onClick={(e) => this.deleteNote(index)}>❌</Button>
                                </td>
                            </tr>
                        ))}
                        <tr>
                            <td>
                                <textarea onChange={(e) => this.setState({ newNote: e.target.value })} value={this.state.newNote} />
                            </td>
                            <td>
                                <Button onClick={this.addNote}>Add Note</Button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <Outlet />
                <Row><ol>
                    {items.map((item) => (
                        <li key={item.id} >
                            User_Name: {item.username},
                            Full_Name: {item.name},
                            User_Email: {item.email}
                        </li>
                    ))}
                </ol>
                </Row>



            </Container>

        );
    }
}

export default App






