
import { useState } from 'react'
import { Link } from 'react-router-dom'
import AdminMain from './Admin/AdminMain'

function Login() {

    const onLogin = () => { return <AdminMain nombre='Oscar' /> }

    return (
        <div className='login'>
            <h2>Quiniela</h2>
            <form id="login" method="get" action="login.php">
                <label><b>User Name
                    </b>
                </label>
                <input type="text" name="Uname" id="Uname" placeholder="Username" />
                <br /><br />
                <label><b>Password
                </b>
                </label>
                <input type="Password" name="Pass" id="Pass" placeholder="Password" />
                <br /><br />
                <input type="button" name="log" id="log" value="Log In"
                    onClick={console.log('Login')} />
                <br /><br />
                <input type="checkbox" id="check" />
                <span>Remember me</span>
                <br /><br />
                <Link to='/OlvidoContrasena' id='RegistrarOlvido'>
                    Olvido contraseña?
                </Link>
                <br/>
                <Link to='/Registrar' id='RegistrarOlvido'>
                    Registrar
                </Link>
            </form>
        </div>
    )
}

export default Login
