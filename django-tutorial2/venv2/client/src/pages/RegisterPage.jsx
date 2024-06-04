import React from "react";

function RegisterPage() {
  //REALIZAR METODO POST PARA REGISTRAR USUARIOS
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="text-center mb-4">
                <h1>Regístrate</h1>
              </div>
              <form>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">Nombre</label>
                  <input type="text" className="form-control" id="nombre" placeholder="Nombre" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="apellido" className="form-label">Apellido</label>
                  <input type="text" className="form-control" id="apellido" placeholder="Apellido" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="telefono" className="form-label">Teléfono</label>
                  <input type="text" className="form-control" id="telefono" placeholder="Teléfono" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="correo" className="form-label">Correo</label>
                  <input type="email" className="form-control" id="correo" placeholder="Correo" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Contraseña</label>
                  <input type="password" className="form-control" id="password" placeholder="Contraseña" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirmar Contraseña</label>
                  <input type="password" className="form-control" id="confirmPassword" placeholder="Repetir contraseña" required />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">Registrarse</button>
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
