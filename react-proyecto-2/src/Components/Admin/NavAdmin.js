import React from 'react';
import {Link} from 'react-router-dom';

function NavAdmin() {
    return (
        <div>
            <body>
                <header>
                    <div class="user">
                        <ul>
                            <Link to='/Admin/CargaMasiva'>
                            <li>Carga Masiva</li>
                            </Link>
                            <Link to='/Admin/Jornadas'>
                            <li>Jornadas</li>
                            </Link>
                            <Link to='/Admin/Temporadas'>
                            <li>Temporadas</li>
                            </Link>
                            <Link to='/Admin/Recompensas'>
                            <li>Recompensas</li>
                            </Link>
                            <Link to='/Admin/Deportes'>
                            <li>Deportes</li>
                            </Link>
                            <Link to='/Admin/Reportes'>
                            <li>Reportes</li>
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

export default NavAdmin
