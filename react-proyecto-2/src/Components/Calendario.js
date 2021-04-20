import React from 'react'
import FilaCalendario from './User/FilaCalendario'

function Calendario() {
    return (
        <div className="calendario">
            <h2> Eventos </h2>
            <h3> Nombre Mes </h3>
            <FilaCalendario/>
            <FilaCalendario/>
            <FilaCalendario/>
            <FilaCalendario/>
        </div>

    )
}

export default Calendario
