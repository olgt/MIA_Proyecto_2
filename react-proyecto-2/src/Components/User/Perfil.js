import React from 'react'
import { Link } from 'react-router-dom'
import NavUser from './NavUser'

function Perfil() {
    return (

        <div>
            <NavUser />
            <div className="perfil">
                <form>
                    <label>
                        <b>Foto de Perfil</b>
                    </label>
                    <input type="file" />
                    <br />
                    <br />

                    <label>
                        <b>User Name</b>
                    </label>
                    <input type="text" />
                    <br />
                    <br />
                    <label>
                        <b>Password</b>
                    </label>
                    <input type="Password" placeholder="Password" />
                    <br />
                    <br />
                    <label>
                        <b>Nombre</b>
                    </label>
                    <input type="text" />
                    <br />
                    <br />
                    <label>
                        <b>Apellido</b>
                    </label>
                    <input type="text" />
                    <br />
                    <br />
                    <label>
                        <b>Fecha de Nacimiento</b>
                    </label>
                    <input type="date" />
                    <br />
                    <br />
                    <label>
                        <b>Correo Electronico</b>
                    </label>
                    <input type="text" />
                    <br />
                    <br />
                    <label>
                        <b>Tier</b>
                    </label>
                    <label id='perfilTier'>
                        <b>Aqui va Tier</b>
                    </label>
                </form>
            </div>
        </div>
    )
}

export default Perfil
