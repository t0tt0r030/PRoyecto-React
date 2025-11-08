import React, { useState } from "react";

function Login({ onClose, onSwitchToRegister, onLoginSuccess }) {

    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target['login-email'].value;
        const password = e.target['login-password'].value;


        if (password.length < 6) {
            setError('La contraseña debe tener al menos 6 caracteres.');
            return;
        }

        const usuariosRegistrados = JSON.parse(localStorage.getItem('usuariosRegistrados')) || [];
        const usuarioEncontrado = usuariosRegistrados.find(u => u.email === email && u.password === password);

        if (usuarioEncontrado) {
            setError('');
            onLoginSuccess(usuarioEncontrado);
        } else {
            setError("Credenciales incorrectas o usuario no registrado.");
        }
    };

    // onClose del padre para el botón de cerrar "X"
    return (
        <div className="auth-modal" style={{ display: 'flex' }}>
            <div className="auth-content">
                <button id="close-login-btn" className="close-btn" onClick={onClose}>
                    &times;
                </button>
                <h3>Iniciar Sesión</h3>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="login-email">Correo Electrónico</label>
                        <input type="email" id="login-email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="login-password">Contraseña</label>
                        <input type="password" id="login-password" required />
                    </div>

                    <p id="login-error" className="error-message">{error}</p>

                    <button type="submit" className="auth-btn btn-login">
                        Entrar
                    </button>
                </form>
                
                <p className="switch-auth">
                    ¿No tienes cuenta?
                    <button
                        type="button"
                        onClick={onSwitchToRegister}
                        className="text-link"
                        id="show-register-link"
                    >
                        Regístrate
                    </button>
                </p>
            </div>
        </div>
    );
}

export default Login;