import React from 'react'
import { Link } from 'react-router-dom'

import NavUser from './NavUser'
import TablaTiers from './TablaTiers'

function Membresia() {
    return (
        <div>
            <div className="navUser">
                <NavUser />
            </div>
            <div className="membresia">
                <form>
                    <label>
                        <b>Tier Actual </b>
                    </label>
                    <label id='perfilTier'>
                        <b>Aqui va Tier</b>
                    </label>
                    <br />
                    <br />
                    <label>
                        <center>
                        <b>Seleccionar Nuevo Tier</b>
                        </center>
                    </label>
                    <br/>
                    <center>
                    <TablaTiers/>
                    </center>
                </form>                
            </div>
        </div>
    )
}

export default Membresia
