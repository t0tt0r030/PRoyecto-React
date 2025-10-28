import React from 'react';
import { ShoppingCart } from "lucide-react";

function Heder() {

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
            href: "#faq"
        },
        {
            nombre: "Contacto",
            href: "#Info"
        }
    ];

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

                      
                        <div className="theme-switcher" aria-label="Cambiar tema" role="button" tabIndex={0}>
                            <i className="fas fa-sun" aria-hidden="true"></i>
                            <i className="fas fa-moon" aria-hidden="true"></i>
                        </div>

                        <div class="nav-controls">
                            <div class="auth-buttons"> 
                                <a href="/register" class="auth-btn btn-register">Registro</a>
                                <a href="/login" class="auth-btn btn-login">Login</a>
                            </div>
                        </div>
                        
                      
                        <div className="hamburger-menu" aria-label="Abrir menú" role="button" tabIndex={0}>
                            <i className="fas fa-bars" aria-hidden="true"></i>
                        </div>

                        
                        <div className="cart-icon-container" id="cart-icon-container" aria-label="Ver carrito" role="button" tabIndex={0}>
                            <i className="rounded-circle cart-icon"><ShoppingCart size={18} /></i>
                 
                        </div>
                    </div>

                </div>
            </nav>
        </header>

    );
}

export default Heder;



