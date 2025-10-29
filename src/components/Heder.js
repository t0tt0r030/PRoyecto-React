import React, {useState, useEffect }from 'react';
import Login from '../components/Login';
import Registro from '../components/Registro';


import { ShoppingCart, Sun, Moon } from "lucide-react";

import '../style.css';

function Heder() {

    const [openModal, setOpenModal] = useState(null);

    const closeModal = () => setOpenModal(null);


    const miMenu = [
        {
            nombre: "Productos",
            href: "#productos"
        },
        {
            nombre: "Sobre Nosotros",
            href: "#sobre-nosotros"
        },
        {
            nombre: "Preguntas",
            href: "#Faq"
        },
        {
            nombre: "Contacto",
            href: "#Info"
        }
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

    return (

        <header>
            <nav className="navbar">
                <div className="container">
                    
                    <img src={'./imagenes/logo.png'}
                        alt={`Foto de pasteleria`}
                        className="rounded-circle img-fluid border border-white border-3"
                        style={{ maxWidth: '150px' }} />

                
                    <ul className="nav-links">
                        {miMenu.map((item, index) => (
                            <li key={index}> 
                                <a href={item.href}>{item.nombre}</a>
                            </li>
                        ))}
                    </ul>

                    <div className="nav-controls">


                        
                    <div 
                    className="theme-switcher" 
                    id="theme-switcher" 
                    aria-label="Cambiar tema" 
                    role="button" 
                    tabIndex={0} 
                    onClick={toggleTheme} 
                    >
                    <i className="sun-icon"><Sun size={18} /></i>
                    <i className="moon-icon"><Moon size={18} /></i>
                    </div>

                        <div className="nav-controls">
                            <div className="auth-buttons"> 
                                <button onClick={() => setOpenModal('registro')} className="auth-btn btn-register">Registro </button>

                                <button onClick={() => setOpenModal('login')} className="auth-btn btn-login">Login</button>
                            </div>
                        </div>
                        
                      
                        <div className="hamburger-menu" aria-label="Abrir menú" role="button" tabIndex={0}>
                            <i className="fas fa-bars" aria-hidden="true"></i>
                        </div>

                        
                        <div className="cart-icon-container" id="cart-icon-container" aria-label="Ver carrito" role="button" tabIndex={0}>
                            <i className="rounded-circle cart-icon"><ShoppingCart size={18} /></i>
                 
                        </div>
                    </div>
                    {openModal === 'login' && <Login onClose={closeModal} />}     
                    {openModal === 'registro' && <Registro onClose={closeModal} />}
                </div>
            </nav>
        </header>

    );
}

export default Heder;



