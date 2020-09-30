import React,{useState} from 'react'
import employees from '../employees.json'
import './style/content.css'
import Search from './searchbar'

function Content () {

    const [employee, setEmployees] =useState(employees)

    return(
        <table> 
            {employee.map(e => 
            
            <tbody key={e.id}>
                <tr>
                    <th className="center">Name</th>
                    <th className="center">Email</th>
                    <th className="center">Phone</th>
                </tr>
                <tr>
                    <td>
                        {e.name}
                    </td>
                    <td className="center">
                        {e.email}
                    </td>
                    <td>
                        {e.phone}
                    </td>
                </tr>
            </tbody>)}
        </table>
    )
}

export default Content;