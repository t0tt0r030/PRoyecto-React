import React, { useState, useEffect } from 'react';
import Login from '../components/Login';
import Registro from '../components/Registro';
import { ShoppingCart, Sun, Moon, Menu } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom'; 
import '../style.css';

function Heder({ cartItems }) { 
    const [isNavOpen, setIsNavOpen] = useState(false); 
    const [openModal, setOpenModal] = useState(null);
    const closeModal = () => setOpenModal(null);
    const navigate = useNavigate();

    const miMenu = [
        { nombre: "Productos", href: "#productos" },
        { nombre: "Sobre Nosotros", href: "#sobre-nosotros" },
        { nombre: "Preguntas", href: "#faq" },
        { nombre: "Contacto", href: "#info" }
    ];

    const [isDarkMode, setIsDarkMode] = useState(
        localStorage.getItem('theme') === 'dark'
    );

    {/* GESTOR DE SESIÓN USUARIO*/}

    const [usuarioActivo, setUsuarioActivo] = useState(null);

    useEffect(() => {
        const sesionGuardada = localStorage.getItem('sesionActiva');
        if (sesionGuardada) {
            setUsuarioActivo(JSON.parse(sesionGuardada));
        }
    }, []);

    const handleLoginSuccess = (usuario) => {
        setUsuarioActivo(usuario);
        localStorage.setItem('sesionActiva', JSON.stringify(usuario)); // Guardamos la sesión
        closeModal(); // Cerramos el modal
    };

    const handleLogout = () => {
        setUsuarioActivo(null);
        localStorage.removeItem('sesionActiva'); // Eliminamos la sesión
    };

    {/* GESTOR DE SESIÓN USUARIO*/}

    useEffect(() => {
        document.body.classList.toggle('dark-mode', isDarkMode);
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    
    const toggleTheme = () => setIsDarkMode(!isDarkMode);
    const toggleNav = () => setIsNavOpen(!isNavOpen);
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const handleNavClick = (e, hash) => {
        e.preventDefault(); 
        if (isNavOpen) {
            toggleNav();
        }

       
        const id = hash.substring(1);
        navigate('/');

        // Usamos un pequeño timeout. Esto le da tiempo para cargar los componentes de la pag principal
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100); // 100ms tiempo de espera seguro
    };

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
                    
                    <button className="navbar-toggler border-0" type="button" onClick={toggleNav} aria-expanded={isNavOpen} aria-label="Toggle navigation">
                        <Menu size={30} color={isDarkMode ? "#f8f9fa" : "#333"} /> 
                    </button>
                
                    <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarSupportedContent">
                        
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0"> 
                            {miMenu.map((item, index) => (
                                <li key={index} className="nav-item bold-text"> 
                                    <a 
                                        className="nav-link px-3" 
                                        href={item.href} 
                                        onClick={(e) => handleNavClick(e, item.href)}
                                    >
                                        {item.nombre}
                                    </a>
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
                                <div className="auth-buttons d-flex align-items-center gap-2">
                                    {usuarioActivo ? (
                                    // SI HAY USUARIO LOGUEADO -> HOLA!! 
                                <>
                            <span className="text-muted me-2 d-none d-md-inline">
                                Hola, <strong>{usuarioActivo.name || 'Usuario'}</strong>!
                                </span>
                                    <button 
                                        onClick={() => { handleLogout(); isNavOpen && toggleNav(); }} 
                                        className="auth-btn btn-outline-danger btn-sm"
                                        style={{border: '1px solid #dc3545', color: '#dc3545'}} 
                                    >
                                        Salir
                                    </button>
                                        </>
                                    ) : (
                                        // NO HAY NADIE¿? -> Registro/Login de siempre
                                        <>
                                            <button onClick={() => { setOpenModal('registro'); isNavOpen && toggleNav(); }} className="auth-btn btn-register btn-sm">Registro</button>
                                            <button onClick={() => { setOpenModal('login'); isNavOpen && toggleNav(); }} className="auth-btn btn-login btn-sm ml-2">Login</button>
                                        </>
                                    )}
       
                                </div>

                                <Link 
                                    to="/carrito" 
                                    className="cart-icon-container" 
                                    style={{ cursor: 'pointer', textDecoration: 'none' }}
                                    onClick={() => isNavOpen && toggleNav()}
                                >
                                    <ShoppingCart size={24} />
                                    {totalItems > 0 && (
                                      <span id="cart-count">{totalItems}</span>
                                    )}
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
                {openModal === 'login' && (
                    <Login 
                        onClose={closeModal} 
                        onSwitchToRegister={() => setOpenModal('registro')} 
                        onLoginSuccess={handleLoginSuccess}
                    />
                )}     
                {openModal === 'registro' && (
                    <Registro 
                        onClose={closeModal} 
                        onSwitchToLogin={() => setOpenModal('login')}
                    />
             )}
                
        </header>
    );
}

export default Heder;