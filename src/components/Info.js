import React, { useState } from "react";
import { Mail, Phone, MapPin, User } from "lucide-react";
import Heder from "./Heder";

import "bootstrap/dist/css/bootstrap.min.css";


function Contacto() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("nombre");
    const email = formData.get("email");
    const message = formData.get("mensaje");

    if (!name || !email || !message) {
      setErrorMessage("Por favor, completa todos los campos.");
      setSuccessMessage("");
      return;
    }

    setSuccessMessage("¡Gracias por tu mensaje! Te responderemos pronto.");
    setErrorMessage("");
    e.target.reset();

  };

  const InfoCard = ({ icon, title, children }) => (
    <div className="contacto-info-card">
      <div className="contacto-info-card-body d-flex align-items-start">
        <div className="contacto-info-card-icon me-3">{icon}</div>
        <div>
          <h5 className="contacto-info-card-title">{title}</h5>
          <p className="contacto-info-card-text mb-0">{children}</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Heder />

      <main className="contacto-main container my-5">
        <div className="contacto-header text-center mb-5">
          <h2 className="contacto-title">Ponte en Contacto</h2>
          <p className="contacto-subtitle text-muted">
            ¿Tienes alguna pregunta, sugerencia o pedido especial? Nos encantaría escucharte.
          </p>
        </div>

        <div className="row g-4">
          {/* FORMULARIO */}
          <div className="col-lg-6">
            <form onSubmit={handleSubmit} noValidate className="contacto-form p-4 border rounded shadow-sm bg-white">
              <h3 className="contacto-form-title text-center mb-4">Envíanos un Mensaje</h3>

              {successMessage && <div className="contacto-success-message text-center">{successMessage}</div>}
              {errorMessage && <div className="contacto-error-message text-center">{errorMessage}</div>}

              <div className="mb-3 contacto-form-group">
                <label htmlFor="nombre" className="form-label contacto-form-label">Nombre Completo</label>
                <div className="input-group contacto-input-wrapper">
                  <span className="input-group-text contacto-input-icon bg-light"><User size={18} /></span>
                  <input type="text" id="nombre" name="nombre" className="form-control contacto-input" placeholder="Tu nombre y apellido" required />
                </div>
              </div>

              <div className="mb-3 contacto-form-group">
                <label htmlFor="email" className="form-label contacto-form-label">Correo Electrónico</label>
                <div className="input-group contacto-input-wrapper">
                  <span className="input-group-text contacto-input-icon bg-light"><Mail size={18} /></span>
                  <input type="email" id="email" name="email" className="form-control contacto-input" placeholder="ejemplo@correo.com" required />
                </div>
              </div>

              <div className="mb-3 contacto-form-group">
                <label htmlFor="mensaje" className="form-label contacto-form-label">Tu Mensaje</label>
                <textarea id="mensaje" name="mensaje" rows="5" className="form-control contacto-input" placeholder="Escribe aquí tu consulta..." required></textarea>
              </div>

              <div className="text-center">
                <button type="submit" className="contacto-cta-button px-4 rounded-pill">Enviar Mensaje</button>
              </div>
            </form>
          </div>

          {/* INFO DE CONTACTO */}
          <div className="col-lg-6">
            <InfoCard icon={<Mail size={22} />} title="Correo Electrónico">
              Escríbenos a: <a href="mailto:contacto@milsabores.cl" className="contacto-link">contacto@milsabores.cl</a>
            </InfoCard>

            <InfoCard icon={<Phone size={22} />} title="Teléfono">
              Llámanos al: <a href="tel:+56912345678" className="contacto-link">+56 9 1234 5678</a>
            </InfoCard>

            <InfoCard icon={<MapPin size={22} />} title="Ubicación">
              Calle Tu Corazón #210, Olmué, Valparaíso
            </InfoCard>

            <div className="contacto-map rounded overflow-hidden shadow-sm mt-4">
              <iframe
            
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3343.7691903912246!2d-71.06281042347594!3d-33.06254287775311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96628335459d80b1%3A0x4be27220eb36ddae!2sTu%20coraz%C3%B3n!5e0!3m2!1ses!2scl!4v1761085091554!5m2!1ses!2scl%22" 
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Pastelería Mil Sabores"
              ></iframe>
            </div>
          </div>
        </div>
      </main>

      <footer className="contacto-footer bg-dark text-white text-center py-4 mt-5">
        <p>&copy; {new Date().getFullYear()} Pastelería Mil Sabores - Todos los derechos reservados.</p>
        <p className="text-secondary small mb-0">Desarrollado con React, y cariño 🥧</p>
      </footer>
    </>
  );
}

export default Contacto;
