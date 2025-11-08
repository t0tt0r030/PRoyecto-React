import React, {useState} from "react";
import Login from "./Login";

function Registro(){
    const [isOpen, setIsOpen] = useState(true); // Asume que está abierto por defecto
    const [error, setError] = useState("");
    const [openModal, setOpenModal] = useState(null);
    const [success, setSuccess] = useState('');


    //OPERACIONES MODAL

    if (!isOpen) {
        return null;
    }
    const closeModal = () => setOpenModal(null);
    const handleClose = () => {
            setIsOpen(false);
            setError(''); 
    };
    
    const handleSubmit = (e) => {
    e.preventDefault();
    
    //fin operaciones modal

    //valores del formulario
    const name = e.target["reg-name"].value;
    const email = e.target["reg-email"].value;
    const password = e.target["reg-password"].value;
    const dob = e.target["reg-dob"].value;
    const code = e.target["reg-code"].value;

    console.log("Datos de registro:", { name, email, password, dob, code });
    //validaciones

    // validación de Contraseña
       if (password.length < 6) {
        setError("La contraseña debe tener al menos 6 caracteres.");
        setSuccess("");
        return;
      }
     // validación de Correo Duoc
     if (!email.endsWith("@duoc.cl") && !email.endsWith("@profesor.duoc.cl")) {
        setError("Para el beneficio de la torta, debes usar un correo @duoc.cl o @profesor.duoc.cl.");
        setSuccess("");
        return; 
      }

      //LÓGICA DE REGISTRO 
    
        // si pasa validaciones,,,
        setError("");

        // simula llamada exitosa
        setSuccess("¡Registro exitoso! Ya puedes iniciar sesión.");
        
        // limpiamos formulario si el registro es exitoso
        e.target.reset();
  };
  return (
    <div id="register-modal" className="auth-modal">
      <div className="auth-content">
        <button id="close-register-btn" className="close-btn" onClick={handleClose}>
          &times;
        </button>
        <h3>Crea tu Cuenta</h3>
        <p className="auth-subtext">
          Si eres estudiante de Duoc UC, regístrate con tu correo institucional (@duoc.cl o @profesor.duoc.cl) y podrías recibir una torta gratis en tu cumpleaños.
        </p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="reg-name">Nombre Completo</label>
            <input type="name" id="reg-name" name="reg-name" required />
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
          <div className="form-group">
            <label htmlFor="reg-code">Código de Descuento (Opcional)</label>
            <input type="text" id="reg-code" name="reg-code" placeholder="Ej: FELICES50" />
          </div>
          
          {/* Mostrar Mensajes: Error o Éxito */}
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
                onClick={() => setOpenModal('login')} 
                className="text-link"
                id="show-login-link"
            >
                Inicia Sesión
            </button>
          </p>
      </div>

      {openModal === 'login' && <Login onClose={closeModal} />}

    </div>
  );

};

export default Registro;