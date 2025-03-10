import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./routes/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import AgregarUsuario from "./Components/AgregarUsuarioComponent/AgregarUsuario";
import TurnoCrud from "./Components/TurnoCrudComponent/TurnoCrud";
import AgregarSede from "./Components/agregarsede/agregarsede";
import AgregarArea from "./Components/agregararea/agregararea";
import AgregarContrato from "./Components/contratos/agregarContrato";
import AsignarActividades from "./Components/asiganacionActividades/actividades"; // Corregí la importación
import ValidarVacaciones from "./Components/ValidarVacacionesComponent/ValidarVacaciones";
import Login from "./Components/LoginFormComponent/LoginForm";
import ValidarHorarios from './Components/ValidarSolisComponent/ValidarHorarios';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
<<<<<<< HEAD
            <Route path="/" element={<Login />} />
            <Route path="/agregarUsuario" element={<AgregarUsuario />} />
            <Route path="/turnoCrud" element={<TurnoCrud />} />
            <Route path="/agregarSede" element={<AgregarSede />} />
            <Route path="/agregarArea" element={<AgregarArea />} />
            <Route path="/agregarContrato" element={<AgregarContrato />} />
            <Route path="/agregarHorario" element={<AgregarHorario />} />
            <Route path="validarVaca" element={<ValidarVacaciones />} />
=======
          <Route path="/" element={<Login />} />
            <Route path="/agregarUsuario" element={<ProtectedRoute element={AgregarUsuario}/>} />
            <Route path="/turnoCrud" element={<ProtectedRoute element={TurnoCrud} />} />
            <Route path="/agregarSede" element={<ProtectedRoute element={AgregarSede} />} />
            <Route path="/agregarArea" element={<ProtectedRoute element={AgregarArea} />} />
            <Route path="/agregarContrato" element={<ProtectedRoute element={AgregarContrato} />} />
            <Route path="/validarVaca" element={<ProtectedRoute element={ValidarVacaciones} />} />
>>>>>>> 493201dd4af993c60a91baf419c1ad2a3e0dc0eb
            <Route
              key="asignar-actividades"
              path="/AsignarActividades"
              element={<ProtectedRoute element={AsignarActividades} />}
            />
            <Route path='/validarHorario' element={<ProtectedRoute element={ValidarHorarios}/>} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
