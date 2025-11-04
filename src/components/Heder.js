import React, {useState, useEffect }from 'react';
import Login from '../components/Login';
import Registro from '../components/Registro';
import { ShoppingCart, Sun, Moon } from "lucide-react";
import '../style.css';

function Heder() { 
    // Estado para controlar la visibilidad del menú colapsable
    const [isNavOpen, setIsNavOpen] = useState(false); 
    const [openModal, setOpenModal] = useState(null);
    const closeModal = () => setOpenModal(null);

    const miMenu = [
        { nombre: "Productos", href: "#productos" },
        { nombre: "Sobre Nosotros", href: "#sobre-nosotros" },
        { nombre: "Preguntas", href: "#Faq" },
        { nombre: "Contacto", href: "#Info" }
    ];

    const [isDarkMode, setIsDarkMode] = useState(
        localStorage.getItem('theme') === 'dark'
    );

    useEffect(() => {
        const body = document.body;
        if (isDarkMode) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]); 

    
    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    // Función para alternar el estado del menú
    const toggleNav = () => {
        setIsNavOpen(prev => !prev);
    };

    return (
        <header>
            <nav className="navbar navbar-expand-lg "> 
                <a className="navbar-brand" href="#">
                    <img 
                        src={'./imagenes/logo.png'}
                        alt={`Foto de pasteleria`}
                        className="rounded-circle img-fluid border border-white border-3"
                        style={{ maxWidth: '100px', marginRight: '10px' }} 
                    />
                </a>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    
                    onClick={toggleNav} 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded={isNavOpen} 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                    <p>Menú</p>
                </button>
            
                <div 
                    className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} 
                    id="navbarSupportedContent"
                >

                    <ul className="navbar-nav mr-auto"> 
                        {miMenu.map((item, index) => (
                            <li key={index} className="nav-item bold-text"> 
                                <a className="nav-link" href={item.href} onClick={() => isNavOpen && toggleNav()}>{item.nombre}</a>
                            </li>
                        ))}
                    </ul>

                    <div className="nav-controls d-flex align-items-center ml-auto"> 
                        
                        <div 
                            className="theme-switcher mr-2" 
                            id="theme-switcher" 
                            aria-label="Cambiar tema" 
                            role="button" 
                            tabIndex={0} 
                            onClick={toggleTheme} 
                        >
                            <i className="sun-icon"><Sun size={18} /></i>
                            <i className="moon-icon"><Moon size={18} /></i>
                        </div>
                    </div>
                    
                </div>
                <div className="auth-buttons mr-2"> 
                            <button onClick={() => { setOpenModal('registro'); isNavOpen && toggleNav(); }} className="auth-btn btn-register">Registro</button>
                            <button onClick={() => { setOpenModal('login'); isNavOpen && toggleNav(); }} className="auth-btn btn-login">Login</button>
                        </div>
                        
                        <div className="cart-icon-container mr-2" aria-label="Ver carrito" role="button" tabIndex={0}>
                            <i className="rounded-circle cart-icon"><ShoppingCart size={26} /></i>
                        </div>                 
                {openModal === 'login' && <Login onClose={closeModal} />}     
                {openModal === 'registro' && <Registro onClose={closeModal} />}
                
            </nav>
        </header>
    );
}

export default Heder;