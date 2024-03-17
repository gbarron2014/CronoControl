import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/vali.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCheck,
  faCircleUser,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import Navigation from "../NavigationComponent/Navigation";

const App = () => {
  const [turnos, setTurnos] = useState([]);

  useEffect(() => {
    const fetchTurnos = async () => {
      try {
        const response = await fetch("http://localhost:3002/turnos");
        if (!response.ok) {
          throw new Error("No se pudo obtener la lista de turnos");
        }
        const data = await response.json();
        setTurnos(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTurnos();
  }, []);

  return (
    <div>
      <Navigation />
      {/* Contenido Principal */}
      <Container className="col-12">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Validar Solicitudes</h1>
            </div>
            <br></br>
            <div className="col-5">
              <form className="d-flex">
                <input
                  className="form-control me-2 "
                  type="search"
                  placeholder="Buscar..."
                  aria-label="Search"
                />
                <button className="btn btn-outline-link" type="submit">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </form>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <table className="table rounded">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Empleado</th>
                      <th>Turno</th>
                      <th>Horario</th>
                      <th>Notas</th>
                      <th className="col-1">Validar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {turnos.map((turno, index) => (
                      <tr key={index}>
                        <td>
                          <FontAwesomeIcon
                            icon={faCircleUser}
                            style={{ color: "#000000", fontSize: "1.5rem" }}
                          />
                        </td>
                        <td>{turno.Nombre}</td>
                        <td>{turno.HoraInicio}</td>
                        <td>{turno.HoraFinal}</td>
                        <td>{turno.role}</td>
                        <td style={{ textAlign: "center" }}>
                          <span style={{ marginRight: "30px" }}>
                            <FontAwesomeIcon
                              icon={faCheck}
                              style={{ color: "#63E6BE" }}
                            />
                          </span>
                          <span>
                            <FontAwesomeIcon
                              icon={faX}
                              style={{ color: "#e50606" }}
                            />
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default App;
