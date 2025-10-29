import React from 'react';


function Heder() {

    const miMenu = [
        {
            nombre: "Productos",
            href: "#productos"
        },
        {
            nombre: "Sobre Nosotros",
            href: "#sobre-nosotros" // Este enlace apunta al ID
        },
        {
            nombre: "Preguntas",
            href: "#faq"
        },
        {
            nombre: "Contacto",
            href: "#contacto"
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
                        
                      
                        <div className="hamburger-menu" aria-label="Abrir menú" role="button" tabIndex={0}>
                            <i className="fas fa-bars" aria-hidden="true"></i>
                        </div>

                        
                        <div className="cart-icon-container" id="cart-icon-container" aria-label="Ver carrito" role="button" tabIndex={0}>
                            <i className="fas fa-shopping-cart"></i>
                            <span id="cart-count">0</span>
                        </div>
                    </div>

                </div>
            </nav>
        </header>
    );
}

export default Heder;



