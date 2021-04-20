import React from 'react'

function TablaTiers() {
    return (
        <div>
            <table>
                <tr>
                    <th>Caracteristicas</th>
                    <th>Bronze</th>
                    <th>Silver</th>
                    <th>Gold</th>
                </tr>
                <tr>
                    <td>Precio</td>
                    <td>$10</td>
                    <td>$20</td>
                    <td>$30</td>
                </tr>
                <tr>
                    <td><input type="buttton" id="log" value="Comprar"></input></td>
                    <td><input type="checkbox"/></td>
                    <td><input type="checkbox"/></td>
                    <td><input type="checkbox"/></td>
                </tr>
            </table>
        </div>
    )
}

export default TablaTiers
