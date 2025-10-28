import React from "react";

function Footer() {
    return (
        <footer className="contacto-footer bg-dark text-white text-center py-4 mt-5">
            <p>&copy; {new Date().getFullYear()} Pastelería Mil Sabores - Todos los derechos reservados.</p>
            <p className="text-secondary small mb-0">Desarrollado con React, y cariño 🥧</p>
        </footer>
    );
}

export default Footer;
