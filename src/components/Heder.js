import React, {useState, useEffect }from 'react';
import Login from '../components/Login';
import Registro from '../components/Registro';
import { ShoppingCart, Sun, Moon, Menu } from "lucide-react";
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
        document.body.classList.toggle('dark-mode', isDarkMode);
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    
    const toggleTheme = () => setIsDarkMode(!isDarkMode);
    const toggleNav = () => setIsNavOpen(!isNavOpen);

    return (
        <header>
            <nav className="navbar navbar-expand-lg "> 
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img 
                            src={'./imagenes/logo.png'}
                            alt={`Foto de pasteleria`}
                            className="rounded-circle img-fluid border border-white border-3"
                            style={{ maxWidth: '100px', marginRight: '10px' }} 
                        />
                    </a>
                    {/* TOGGLER */}
                    <button className="navbar-toggler border-0" type="button" onClick={toggleNav} aria-expanded={isNavOpen} aria-label="Toggle navigation">
                        <Menu size={30} color={isDarkMode ? "#f8f9fa" : "#333"} /> 
                    </button>
                
                    <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarSupportedContent">
                        
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0"> 
                            {miMenu.map((item, index) => (
                                <li key={index} className="nav-item bold-text"> 
                                    <a className="nav-link px-3" href={item.href} onClick={() => isNavOpen && toggleNav()}>{item.nombre}</a>
                                </li>
                            ))}
                        </ul>

                            <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">   
                                <div 
                                className="theme-switcher" 
                                role="button" 
                                tabIndex={0} 
                                onClick={toggleTheme} 
                                style={{ cursor: 'pointer' }}>
                                    {isDarkMode ? (<Moon size={20} color="#f8f9fa"/>) : (<Sun size={20} color="#333"/>)}
                                </div>
                                <div className="auth-buttons d-flex gap-2"> 
                                    <button onClick={() => { setOpenModal('registro'); isNavOpen && toggleNav(); }} className="auth-btn btn-register btn-sm">Registro</button>
                                    <button onClick={() => { setOpenModal('login'); isNavOpen && toggleNav(); }} className="auth-btn btn-login btn-sm">Login</button>
                                </div>
                                <div className="cart-icon-container" role="button" tabIndex={0} style={{ cursor: 'pointer' }}>
                                    <ShoppingCart size={24} />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                {openModal === 'login' && <Login onClose={closeModal} />}     
                {openModal === 'registro' && <Registro onClose={closeModal} />}
                
        </header>
    );
}

export default Heder;