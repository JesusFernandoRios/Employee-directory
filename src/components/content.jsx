import React from 'react'
import './style/content.css'

function Content ({filter}) {

    return(
        <table>
            <tbody>
                <tr>
                    <th className="center">Name</th>
                    <th className="center">Email</th>
                    <th className="center">Phone</th>
                </tr>
                {filter.map(e => 
            
                    <tr key={e.id} >
                        <td>
                            {e.name}
                        </td>
                        <td className="center">
                            {e.email}
                        </td>
                        <td>
                            {e.phone}
                        </td>
                    </tr>)}
            </tbody>
        </table>
    )
}

export default Content;