import React from 'react';
import { ShoppingCart, User, LogIn, Menu } from 'lucide-react';

const App = () => {
    // Estado simulado para el carrito y la autenticación (para simplificar, no se implementa lógica real)
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí iría la lógica de envío, por ahora solo mostramos un mensaje en consola
        console.log('Formulario de contacto enviado');
        alert('¡Mensaje enviado con éxito!');
    };

    // --- Componente de la Barra de Navegación Superior ---
    const NavbarTop = () => (
        <nav className="navbar navbar-expand-lg bg-white border-b shadow-sm">
            <div className="container-fluid max-w-7xl mx-auto p-3">
                
                {/* Contenido de Búsqueda Centrado */}
                <div className="hidden lg:flex collapse navbar-collapse justify-center" id="navbarTopContent">
                    <form className="d-flex w-full max-w-md" role="search">
                        <input 
                            className="form-control me-2" 
                            type="search" 
                            placeholder="Buscar" 
                            aria-label="Buscar" 
                        />
                        <button className="btn btn-outline-success" type="submit">
                            Buscar
                        </button>
                    </form>
                </div>

                {/* Botones de Sesión/Cuenta */}
                <div className="d-flex space-x-2">
                    {isLoggedIn ? (
                         <>
                            {/* Botón de Perfil/Usuario Logueado */}
                            <button 
                                className="btn btn-outline-secondary" 
                                onClick={() => alert('Ver Perfil')}
                            >
                                <User size={18} className="inline mr-1" /> Perfil
                            </button>
                            {/* Botón de Cerrar Sesión (simulado) */}
                            <button 
                                className="btn btn-danger" 
                                onClick={() => setIsLoggedIn(false)}
                            >
                                <LogIn size={18} className="inline mr-1" /> Salir
                            </button>
                         </>
                    ) : (
                        <>
                            <a href="/iniciar-sesion.html" className="btn btn-outline-primary">
                                Iniciar Sesión
                            </a>
                            <a href="/crear-sesion.html" className="btn btn-primary">
                                Crear Cuenta
                            </a>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );

    // --- Componente de la Barra de Navegación Inferior (Menú Desktop) ---
    const NavbarBottom = () => (
        <nav className="navbar navbar-expand-lg bg-gray-50 border-b d-none d-lg-block">
            <div className="container-fluid max-w-7xl mx-auto p-3">
                <div className="collapse navbar-collapse justify-center" id="navbarBottomContent">
                    <ul className="navbar-nav space-x-4">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        
                        {/* Dropdown de Categorías */}
                        <li className="nav-item dropdown group relative">
                            <a 
                                className="nav-link dropdown-toggle cursor-pointer" 
                                role="button" 
                                aria-expanded="false"
                            >
                                Categorías
                            </a>
                            <ul className="dropdown-menu absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 py-1 z-10">
                                <li><a className="dropdown-item px-4 py-2 hover:bg-gray-100 block" href="/categorias.html">Acción</a></li>
                                <li><a className="dropdown-item px-4 py-2 hover:bg-gray-100 block" href="/categorias.html">Aventura</a></li>
                                <li><a className="dropdown-item px-4 py-2 hover:bg-gray-100 block" href="/categorias.html">Estrategia</a></li>
                            </ul>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link" href="/ofertas.html">Ofertas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/nosotros.html">Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/blog.html">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-red-600 font-bold" href="/contacto.html">Contacto</a>
                        </li>
                        
                        {/* Botón de Carrito */}
                        <li className="nav-item ml-10">
                            <a className="btn btn-success flex items-center" href="/carrito.html">
                                <ShoppingCart size={18} className="inline mr-2" />
                                <strong>Carrito</strong> <span className="ml-2 font-bold">$5.000</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );

    // --- Offcanvas (Menú Móvil) ---
    // NOTA: En React puro (sin librerías como Bootstrap JS), la funcionalidad de toggle (mostrar/ocultar) 
    // debe ser controlada por el estado de React. Aquí se simula la estructura visual del Offcanvas.
    const OffcanvasMobileMenu = ({ isOpen, toggleMenu }) => {
        const categories = ['Acción', 'Aventura', 'Estrategia'];
        const listItems = ['Ofertas', 'Historial'];

        return (
            <>
                {/* Botón de Menú Móvil (visible solo en small screens) */}
                <div className="text-center p-3 lg:hidden bg-white border-b">
                    <button 
                        className="btn btn-primary d-lg-none flex items-center mx-auto" 
                        type="button" 
                        onClick={toggleMenu}
                    >
                        <Menu size={18} className="mr-2" /> Menú
                    </button>
                </div>
                
                {/* Overlay (simulación) */}
                {isOpen && (
                    <div 
                        className="fixed inset-0 bg-black opacity-50 z-20 lg:hidden" 
                        onClick={toggleMenu}
                    ></div>
                )}

                {/* Contenido del Offcanvas */}
                <div 
                    className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 z-30 lg:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
                    tabIndex="-1" 
                    id="offcanvasMobileMenu"
                    aria-labelledby="offcanvasMobileMenuLabel"
                >
                    <div className="p-4">
                        <div className="flex justify-between items-center mb-4 border-b pb-2">
                            <h5 className="text-xl font-semibold" id="offcanvasMobileMenuLabel">Menú</h5>
                            <button 
                                type="button" 
                                className="btn-close text-xl" 
                                onClick={toggleMenu} 
                                aria-label="Close"
                            >
                                &times;
                            </button>
                        </div>

                        {/* Card de Usuario */}
                        <div className="card mb-3 border rounded-lg overflow-hidden">
                            <div className="flex g-0">
                                <div className="w-1/4 flex items-center justify-center p-2">
                                    <User size={48} className="text-gray-500"/>
                                </div>
                                <div className="w-3/4 p-3">
                                    <h5 className="font-bold">Nombre del Usuario</h5>
                                    <p className="text-sm text-gray-500">correo@ejemplo.com</p>
                                    <div className="flex justify-between mt-2">
                                        <a href="/#" className="btn btn-primary btn-sm">Ver Perfil</a>
                                        <a href="/#" className="btn btn-danger btn-sm">Cerrar Sesión</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Botones de Sesión Móvil (si no está logueado) */}
                        {!isLoggedIn && (
                            <div className="flex my-3 space-x-2">
                                <a href="/iniciar-sesion.html" className="btn btn-outline-primary w-1/2">Iniciar Sesión</a>
                                <a href="/crear-sesion.html" className="btn btn-primary w-1/2">Crear Cuenta</a>
                            </div>
                        )}
                        
                        {/* Acordeón de Categorías y Lista de Enlaces */}
                        <ul className="list-group">
                            <li className="list-group-item p-0">
                                <div className="accordion accordion-flush">
                                    <div className="accordion-item border-b">
                                        <h2 className="accordion-header">
                                            <button 
                                                className="accordion-button flex justify-between items-center w-full p-3 text-left font-semibold" 
                                                type="button" 
                                                onClick={() => alert('Abrir Categorías')} // Simulación de toggle
                                                aria-expanded="false" 
                                                aria-controls="flush-collapseOne"
                                            >
                                                Categorías
                                            </button>
                                        </h2>
                                        <ul className="list-group border-t">
                                            {categories.map((cat, index) => (
                                                <li key={index} className="list-group-item d-flex justify-content-between align-items-center p-3 hover:bg-gray-50">
                                                    {cat}
                                                    <span className="badge bg-primary rounded-pill">14</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            {listItems.map((item, index) => (
                                <li key={index} className="list-group-item p-3 hover:bg-gray-50">
                                    <a href="/#" className="link-none block w-full">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </>
        );
    };

    // Usamos el estado de React para manejar la visibilidad del Offcanvas
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);


    return (
        <div className="min-h-screen flex flex-col bg-gray-50 font-inter">
            {/* 1. Navegación Superior */}
            <NavbarTop />
            
            {/* 2. Navegación Inferior (Solo Desktop) y Botón Móvil */}
            <NavbarBottom />
            
            {/* 3. Botón de Menú Móvil (Se mueve al Offcanvas para mejor manejo) */}
            <OffcanvasMobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />


            {/* 4. Contenido Principal - Formulario de Contacto */}
            <main className="flex-grow container mx-auto p-4 max-w-7xl">
                <div className="row justify-content-center my-8">
                    <div className="col-md-8 w-full">
                        <div className="card shadow-lg rounded-xl overflow-hidden">
                            <div className="card-body p-6 md:p-10">
                                <div className="container">
                                    <h2 className="text-center mb-6 text-3xl font-bold text-gray-800">Contacto</h2>
                                    <div className="row justify-content-center">
                                        <div className="col-md-8 w-full">
                                            <form onSubmit={handleSubmit}>
                                                <div className="mb-4">
                                                    <label htmlFor="nombre" className="form-label block text-sm font-medium text-gray-700">Nombre</label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" 
                                                        id="nombre" 
                                                        placeholder="Tu nombre"
                                                        // React requiere cerrar etiquetas
                                                    /> 
                                                </div>
                                                <div className="mb-4">
                                                    <label htmlFor="email" className="form-label block text-sm font-medium text-gray-700">Email</label>
                                                    <input 
                                                        type="email" 
                                                        className="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" 
                                                        id="email" 
                                                        placeholder="Tu correo electrónico"
                                                        // React requiere cerrar etiquetas
                                                    />
                                                </div>
                                                <div className="mb-4">
                                                    <label htmlFor="mensaje" className="form-label block text-sm font-medium text-gray-700">Mensaje</label>
                                                    <textarea 
                                                        className="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" 
                                                        id="mensaje" 
                                                        rows="3" 
                                                        placeholder="Tu mensaje"
                                                    ></textarea>
                                                </div>
                                                <div className="text-end">
                                                    <button type="submit" className="btn btn-primary px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-150">
                                                        Enviar
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            

            
            <footer className="bg-gray-800 text-white text-center py-6 mt-10">
                <div className="container-fluid max-w-7xl mx-auto px-4">
                    {/* El iframe no requiere cierre de etiqueta en HTML5, pero en JSX sí */}
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d795.8652023171296!2d-70.6151711566251!3d-33.4328796238235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c586497835ad%3A0xa929ba68e1ac6051!2sDuoc%20UC%20Casa%20Central!5e1!3m2!1ses!2scl!4v1722850059541!5m2!1ses!2scl" 
                        width="100%" 
                        height="300px" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Ubicación Duoc UC"
                    ></iframe>
                </div>
                <p className="mt-4 text-sm">&copy; 2030 Tienda de Videojuegos - Desarrollado en React</p>
            </footer>
        </div>
    );
}

export default App;