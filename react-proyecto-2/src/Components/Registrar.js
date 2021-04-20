import React from 'react'
import { Link } from 'react-router-dom'

function Registrar() {
    return (
        <div className='registrar'>
            <Link to='/' className='Regresar'>
                Regresar
            </Link>
            <h2>Registrarse</h2>
            <form id="registrar" method="get">
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
                    <b>Foto de Perfil</b>
                </label>
                <input type="file" />
                <br />
                <br />
                <input type="button" name="log" id="log" value="Registrarme"
                    onClick={console.log('Login')} />
                <br />
                <br />
            </form>
        </div>
    )
}

export default Registrar
