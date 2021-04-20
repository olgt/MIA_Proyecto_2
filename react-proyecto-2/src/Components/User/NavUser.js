import React from 'react'
import {Link} from 'react-router-dom'

function NavUser() {
    return (
        <div>
            <body>
                <header>
                    <div class="user">
                        <ul>
                            <Link to='/User/Perfil'>
                                <li>Perfil</li>
                            </Link>
                            <Link to='/User/Membresia'>
                                <li>Membresia</li>
                            </Link>
                            <Link to='/User/Eventos'>
                                <li>Eventos</li>
                            </Link>
                            <Link to='/User/Recompensas'>
                                <li>Recompensas</li>
                            </Link>
                            <Link to='/'>
                                <li>Log Out</li>
                            </Link>
                        </ul>
                    </div>
                </header>
            </body>
        </div>
    )
}

export default NavUser

