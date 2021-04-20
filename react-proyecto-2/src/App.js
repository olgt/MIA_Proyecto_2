import Login from './Components/Login'

import AdminMain from './Components/Admin/AdminMain'
import CargaMasiva from './Components/Admin/CargaMasiva'
import Jornadas from './Components/Admin/Jornadas'
import Temporadas from './Components/Admin/Temporadas'
import Recompensas from './Components/Admin/Recompensas'
import Deportes from './Components/Admin/Deportes'
import Reportes from './Components/Admin/Reportes'

import UserMain from './Components/User/UserMain'
import Perfil from './Components/User/Perfil'
import Membresia from './Components/User/Membresia'
import Eventos from './Components/User/Eventos'
import Recompensa from './Components/User/Recompensas'


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Registrar from './Components/Registrar'
import OlvidoContrasena from './Components/OlvidoContrasena'


function App() {

  return (
    <Router>
      <div>
        <switch>
          <Route path="/" exact component={Login} />
          <Route path="/User/UserMain" component={UserMain} />
          <Route path="/User/Perfil" component={Perfil} />
          <Route path="/User/Membresia" component={Membresia} />
          <Route path="/User/UserMain" component={UserMain} />
          <Route path="/User/Eventos" component={Eventos} />
          <Route path="/User/Recompensas" component={Recompensa} />
          <Route path="/Admin/AdminMain" component={AdminMain} />
          <Route path="/Admin/CargaMasiva" component={CargaMasiva} />
          <Route path="/Admin/Jornadas" component={Jornadas} />
          <Route path="/Admin/Temporadas" component={Temporadas} />
          <Route path="/Admin/Recompensas" component={Recompensas} />
          <Route path="/Admin/Deportes" component={Deportes} />
          <Route path="/Admin/Reportes" component={Reportes} />
          <Route path="/Registrar" component={Registrar}/>
          <Route path="/OlvidoContrasena" component={OlvidoContrasena}/>
          
        </switch>
      </div>
    </Router>
  );
}

export default App;
