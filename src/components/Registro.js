import React, { useState } from "react";

function Registro({ onClose, onSwitchToLogin }) {

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");



    const registrarUsuario = async (datosUsuario) => {
      console.log("ENTRÉ A registrarUsuario");
    
        try {
 
            const respuesta = await fetch(
                'http://localhost:3001/api/pasteleriaMilSabores/auth/registro',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(datosUsuario)
                }
            );

            const data = await respuesta.json();

            if (!respuesta.ok) {
                // error real del servidor
                setError(data.message || "Error en el registro");
                return false;
            }

            setSuccess("¡Usuario registrado con éxito!");
            return true;

        } catch (err) {
            console.error("Error al conectar con el servidor:", err);
            setError("No se pudo conectar con el servidor");
            return false;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const nombre = e.target["reg-name"].value;
        const email = e.target["reg-email"].value;
        const password = e.target["reg-password"].value;
        const fechaNacimiento = e.target["reg-dob"].value;

        // VALIDACIONES BÁSICAS
        if (password.length < 6) {
            setError("La contraseña debe tener al menos 6 caracteres.");
            setSuccess("");
            return;
        }

        setError("");
        setSuccess("");

        // OBJETO EXACTO QUE ESPERA EL BACKEND
        const nuevoUsuario = {
            usuario: nombre,
            email,
            contrasena: password,
            fechaNacimiento
        };

        // --- 💡 IMPORTANTE: usar await ---
        const ok = await registrarUsuario(nuevoUsuario);

        if (ok) {
            e.target.reset();
        }
    };

    return (
        <div className="auth-modal" style={{ display: 'flex' }}>
            <div className="auth-content">
                <button id="close-register-btn" className="close-btn" onClick={onClose}>
                    &times;
                </button>

                <h3>Crea tu Cuenta</h3>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="reg-name">Nombre Completo</label>
                        <input type="text" id="reg-name" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="reg-email">Correo Electrónico</label>
                        <input type="email" id="reg-email" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="reg-password">Contraseña</label>
                        <input type="password" id="reg-password" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="reg-dob">Fecha de Nacimiento</label>
                        <input type="date" id="reg-dob" required />
                    </div>

                    {error && <p className="error-message">{error}</p>}
                    {success && <p className="success-message">{success}</p>}

                    <button type="submit" className="cta-button full-width">
                        Registrarse
                    </button>
                </form>

                <p className="switch-auth">
                    ¿Ya tienes cuenta?
                    <button type="button" onClick={onSwitchToLogin} className="text-link">
                        Inicia Sesión
                    </button>
                </p>
            </div>
        </div>
    );
}

export default Registro;
