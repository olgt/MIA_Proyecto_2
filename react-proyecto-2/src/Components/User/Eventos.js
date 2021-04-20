import React from 'react'
import { Link } from 'react-router-dom'
import Calendario from '../Calendario'
import NavUser from './NavUser'


function Eventos() {
    return (
        <div>
            <NavUser />
            <Calendario/>
        </div>
    )
}

export default Eventos
