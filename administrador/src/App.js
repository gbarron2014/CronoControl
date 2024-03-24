import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ValidarSolis from "./Components/ValidarSolisComponent/ValidarSolis";
import AgregarUsuario from './Components/AgregarUsuarioComponent/AgregarUsuario';
import TurnoCrud from './Components/TurnoCrudComponent/TurnoCrud';
import AgregarSede from './Components/agregarsede/agregarsede';
import AgregarArea from './Components/agregararea/agregararea';
import AgregarContrato from './Components/contratos/agregarContrato'; // Importa el componente AgregarContrato

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<ValidarSolis />} />
          <Route path='/agregarUsuario' element={<AgregarUsuario />} />
          <Route path='/turnoCrud' element={<TurnoCrud />} />
          <Route path='/agregarSede' element={<AgregarSede />} />
          <Route path='/agregarArea' element={<AgregarArea />} />
          <Route path='/agregarContrato' element={<AgregarContrato />} /> {/* Agrega esta línea para el componente de gestión de contratos */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
