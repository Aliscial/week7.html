import { use } from 'chai'
import React from 'react'

function CRUD() {
     const list = [
        {
            id: 1,
            FirstName: ""
            LastName: ""
            Question: ""
            
        },
        {
            id: 2,
            FirstName:
            LastName:
            Question:
        },
     ]
     const [lists, setlist] = useState(list)

     return()
     <div>
        <table>
            {list.map((current)) => (
<tr>
    <td>{current.FirstName}</td>
    <td>{current.LastName}</td>
    <td>{current.LastName}</td>
</tr>
            ))
}
            
        </table>
            