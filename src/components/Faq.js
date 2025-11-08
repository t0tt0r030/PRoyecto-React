import React from "react";
import FaqItem from './FaqItem';
import "bootstrap/dist/css/bootstrap.min.css";
import '../style.css';

const faqData = [
    {
        id: 1,
        question: "¿Cuáles son los métodos de pago?",
        answer: "Aceptamos todo medio de pago"
    },
    {
        id: 2,
        question: "¿A qué zonas de Santiago despachan?",
        answer: "Realizamos entregas a domicilio en toda la zona de Puente Alto y La Florida"
    },
    {
        id: 3,
        question: "¿Cómo realizo un pedido?",
        answer: (
            <>
                Es muy fácil. Revisa nuestro catálogo de productos, elige tus pastel favorito y procede a realizar el pago a través de nuestra plataforma segura. 
                <p>Si tienes dudas, contáctanos vía Instagram <a href="https://www.instagram.com/pasteleria-mil-sabores" target="_blank" rel="noopener noreferrer">@pasteleria-mil-sabores</a> o por WhatsApp al <a href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer">+56 9 12345678</a>.</p>
                
            </>
        )
    },
    {
        id: 4,
        question: "¿Ofrecen opciones para personas con alergias o dietas especiales?",
        answer: "Sí, ofrecemos opciones para personas con alergias o dietas especiales. Por favor, contáctanos para más información."
    }
];

const Faq = () => {
    return (
        <section id="faq"> 
            <div className="container">
               <h2> Preguntas Frecuentes</h2>

                <div className="faq-container">
                    {faqData.map(item => (
                        <FaqItem 
                            key={item.id}
                            question={item.question}
                            answer={item.answer}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;