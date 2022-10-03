import { Link } from "react-router-dom"
import Row from "react-bootstrap/Row"
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import




class App extends React.Component {

    // Constructor 
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
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
                <Row>
                    <Col>
                        <h1>Fall Fashion Trends!</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to={`about`}>
                            <Card>
                                <Card.Img variant="top" src="\images\adobe orange w16.jpg" />
                                <Card.Body>
                                    <Card.Title>Burnt orange</Card.Title>
                                    <Card.Text>
                                        Does burnt orange electrifiy your soul?
                                    </Card.Text>
                                    Can you step out your comfort zone this fall? Yes or No?
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Link>
                        <Link to={`about`}>
                            <Card>
                                <Card.Img variant="top" src="\images\ocean blue w16.jpg" />
                                <Card.Body>
                                    <Card.Title>Ocean blue</Card.Title>
                                    <Card.Text>
                                        Will ocean blue be your signature color this season?
                                    </Card.Text>
                                    Do you feel confident in your fashion choices? Yes or No?
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Link>
                        <Card>
                            <Card.Img variant="top" src="\images/romper w16.jpg" />
                            <Card.Body>
                                <Card.Title>Daily Yellow</Card.Title>
                                <Card.Text>
                                    Which best fits your style bright colors or wild patterns?
                                </Card.Text>
                                Will you dare to be your best self this fall? Yes or No?
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="\images/hs w16 dress.jpg" />
                            <Card.Body>
                                <Card.Title>Houndstooth</Card.Title>
                                <Card.Text>
                                    Would you prefer houndstooth or plaid?
                                </Card.Text>
                                Do you think that your style is a good representation of who you are? Yes or No?
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Link to={`results`}>
                            <Card>
                                <Card.Img variant="top" src="\images\plaid-dress w16.jpg" />
                                <Card.Body>
                                    <Card.Title>Plaid</Card.Title>
                                    <Card.Text>
                                        Was plaid featured in this years Fall Couture event?
                                    </Card.Text>
                                    Does plaid make you feel more trendy? Yes or No?
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Link>
                        <Card>
                            <Card.Img variant="top" src="\images/zebra pants w16.jpg" />
                            <Card.Body>
                                <Card.Title>Zebra Print</Card.Title>
                                <Card.Text>
                                    Does animal print peak your interest?
                                </Card.Text>
                                Will you dare to be bold this fall? Yes or No?
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="\images/hot pink romp w16.jpg" />
                            <Card.Body>
                                <Card.Title>Hot pink</Card.Title>
                                <Card.Text>
                                    Do you think bright colors inspire creativity?
                                </Card.Text>
                                Is fashion a rendition of nature formatted to fit the human form? Yes or No?
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>



                    </Col>
                    <Col>
                    </Col>
                </Row>
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






