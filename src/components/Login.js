import React, {useState} from "react";
import Registro from "../components/Registro";

function Login(){

    const [isOpen, setIsOpen] = useState(true);
    const [error, setError] = useState("");
    const [openModal, setOpenModal] = useState(null);

    
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
    
    const email = e.target['login-email'].value;
    const password = e.target['login-password'].value;
            
    console.log('Intentando iniciar sesión con:', email, password);
            
            
    if (password.length < 6) {
        setError('La contraseña debe tener al menos 6 caracteres.');
    } else {
        setError('');
            
        }
    };
    

    return (
            <div id="login-modal" className="auth-modal">
              <div className="auth-content">
        
                <button id="close-login-btn" className="close-btn" onClick={handleClose}>
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
                    onClick={() => setOpenModal('registro')} 
                    className="login-link" 
                    id="show-login-link"
                  >
                    Regístrate
                  </button>                
                </p>
              </div>
 
              {openModal === 'registro' && <Registro onClose={closeModal} />}
            </div>
          );
    }


export default Login;