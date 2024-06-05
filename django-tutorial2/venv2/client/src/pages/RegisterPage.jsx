import React, { useState } from "react";
import { registrarUsuario } from "../api/cerveceria_API";
import { useNavigate } from "react-router-dom";
import "../css/RegisterPage.css"; // Asegúrate de tener un archivo CSS para tus estilos personalizados

function RegisterPage() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    const newUser = {
      correo,
      nombres: nombre, // Asegúrate de que el nombre del campo coincida con lo que espera el backend
      apellidos: apellido, // Asegúrate de que el nombre del campo coincida con lo que espera el backend
      telefono,
      direccion: direccion || null,
      password,
      cod_rol: 1,
    };

    console.log(newUser); // Agrega esto para verificar la estructura de los datos que se envían

    try {
      const response = await registrarUsuario(newUser);
      if (response.status === 201) { // Asegúrate de que la respuesta tiene un estado 201 (creado)
        setSuccess("Usuario registrado con éxito");
        setError(null);
        console.log("Usuario registrado con éxito:", response.data);
        localStorage.setItem("usuario", JSON.stringify(response.data));
        navigate("/perfil");
      } else {
        console.error("Error al registrar al usuario");
        setError("Error al registrar al usuario");
      }
    } catch (error) {
      setError(error.response?.data?.message || "Error registrando usuario");
      setSuccess(null);
      console.error("Error registrando usuario:", error.response?.data);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="text-center mb-4">
                <h1>Regístrate</h1>
              </div>
              {success && <div className="alert alert-success">{success}</div>}
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">
                    Nombres
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Ingresa tus nombres"
                    onChange={(e) => {
                      const inputValue = e.target.value;
                      if (!inputValue || /^[A-Za-z\s]+$/.test(inputValue)) {
                        setNombre(inputValue);
                      }
                    }}
                    value={nombre}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="apellido" className="form-label">
                    Apellidos
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Ingresa tus apellidos"
                    onChange={(e) => {
                      const inputValue = e.target.value;
                      if (!inputValue || /^[A-Za-z\s]+$/.test(inputValue)) {
                        setApellido(inputValue);
                      }
                    }}
                    value={apellido}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="telefono" className="form-label">
                    Teléfono
                  </label>
                  <input
                    className="form-control"
                    type="tel"
                    placeholder="Ingresa un número de teléfono"
                    onChange={(e) => {
                      const validatedValue = e.target.value
                        .replace(/\D/g, "")
                        .slice(0, 11);
                      setTelefono(validatedValue);
                    }}
                    value={telefono}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="direccion" className="form-label">
                    Dirección (opcional)
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Ingresa tu dirección"
                    onChange={(e) => {
                      const inputValue = e.target.value;
                      if (!inputValue || /^[A-Za-z\s]+$/.test(inputValue)) {
                        setDireccion(inputValue);
                      }
                    }}
                    value={direccion}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="correo" className="form-label">
                    Correo
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Ingresa un correo"
                    onChange={(e) => setCorreo(e.target.value)}
                    value={correo}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Contraseña
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirmar Contraseña
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Confirma tu contraseña"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    required
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Registrarse
                  </button>
                </div>
              </form>
              <div className="text-center mt-3">
                <a href="/">Volver al Inicio</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
