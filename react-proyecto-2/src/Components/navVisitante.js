import React from 'react'
import { Link } from 'react-router-dom'

function navVisitante() {
    return (
        <div>
            <Link to='/'>
                <li>Regresar a Login</li>
            </Link>
        </div >
    )
}

export default navVisitante
