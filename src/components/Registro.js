import React, {useState} from "react";

function Registro({ onClose, onSwitchToLogin }) {

    const [error, setError] = useState("");
    const [success, setSuccess] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const name = e.target["reg-name"].value;
        const email = e.target["reg-email"].value;
        const password = e.target["reg-password"].value;
        const dob = e.target["reg-dob"].value;

        // CONEXIÓN CON BACKEND
const registrarUsuario = async (datosUsuario) => {
  try {
    const respuesta = await fetch('http://localhost:3001/api/pasteleriaMilSabores/registro', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datosUsuario),
    });

    const data = await respuesta.json();
    if (respuesta.ok) {
      alert('¡Usuario registrado con éxito!');
    } else {
      alert('Error: ' + data.message);
    }
  } catch (error) {
    console.error('Error al conectar con el servidor:', error);
  }
};

        //VALIDACIONES
        if (password.length < 6) {
            setError("La contraseña debe tener al menos 6 caracteres.");
            setSuccess("");
            return;
        }
        // Validación de correo
        // if (!email.endsWith("@duoc.cl") && !email.endsWith("@profesor.duoc.cl")) { ... }
        //LOGICA DE REGISTRO 
        setError("");


        const nuevoUsuario = { name, email, password, dob };


        const usuariosRegistrados = JSON.parse(localStorage.getItem('usuariosRegistrados')) || [];


        if (usuariosRegistrados.some(u => u.email === email)) {
            setError("Este correo ya está registrado.");
            return;
        }
        

        usuariosRegistrados.push(nuevoUsuario);
      
        localStorage.setItem('usuariosRegistrados', JSON.stringify(usuariosRegistrados));

        setSuccess("¡Registro exitoso! Ya puedes iniciar sesión.");
        e.target.reset();

    };

    return (
        <div className="auth-modal" style={{display: 'flex'}}>
            <div className="auth-content">
                {/* onClose del padre */}
                <button id="close-register-btn" className="close-btn" onClick={onClose}>
                    &times;
                </button>
                <h3>Crea tu Cuenta</h3>
                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="reg-name">Nombre Completo</label>
                        <input type="text" id="reg-name" name="reg-name" required />
                    </div>
                     <div className="form-group">
                        <label htmlFor="reg-email">Correo Electrónico</label>
                        <input type="email" id="reg-email" name="reg-email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="reg-password">Contraseña</label>
                        <input type="password" id="reg-password" name="reg-password" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="reg-dob">Fecha de Nacimiento</label>
                        <input type="date" id="reg-dob" name="reg-dob" required />
                    </div>    
                    {error && <p id="register-error" className="error-message">{error}</p>}
                    {success && <p id="register-success" className="success-message">{success}</p>}
                    
                    <button type="submit" className="cta-button full-width">
                        Registrarse
                    </button>
                </form>
                
                <p className="switch-auth">
                    ¿Ya tienes cuenta? 
                    <button 
                        type="button" 
                        onClick={onSwitchToLogin} 
                        className="text-link"
                        id="show-login-link"
                    >
                        Inicia Sesión
                    </button>
                </p>
            </div>
        </div>
    );
}

export default Registro;