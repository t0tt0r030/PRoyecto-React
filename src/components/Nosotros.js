import React from 'react';

function Nosotros() {

  
    const datos = [
        {
            nosotros: "Pastelería 1000 Sabores celebra su 50 aniversario como un referente en la repostería chilena. Famosa por su participación en un récord Guinness en 1995, cuando colaboró en la creación de la torta más grande del mundo para los pasteles mas deliciosos"
        }
    ];

   
    const textoHistoria = datos[0].nosotros;

    return (
       
        <section id="sobre-nosotros" className="bg-light">
            <div className="container animate-on-scrol">
                <h2>Nuestra Historia</h2>

            
                <p>{textoHistoria}</p>

            </div>
        </section>
    );
}

export default Nosotros;