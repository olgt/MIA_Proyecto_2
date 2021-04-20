import React from 'react'
import { Link } from 'react-router-dom'

function OlvidoContrasena() {
    return (
        <div className='registrar'>
            <Link to='/' className='Regresar'>
                Regresar
            </Link>

            <h1>Recuperar Contraseña</h1>
            <form>
                <label>
                    <b>Correo Electronico: </b>
                </label>
                <input type="text" placeholder="Ingrese Correo Electronico" />
                <br />
                <br />
                <input type="button" id="log" value="Recuperar" />
            </form>
        </div>
    )
}

export default OlvidoContrasena
