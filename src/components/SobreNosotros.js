import React from 'react';
import { BookText, Heart, Eye } from 'lucide-react'; // Importamos iconos de Lucide
import './SobreNosotros.css'; 

const SobreNosotros = () => {
  return (
    // ID
    <div id="sobre-nosotros" className="container-fluid py-5 text-center bg-light-pink sobre-nosotros-container">
        
      <h1 className="titulo-historia mb-5">Sobre Nosotros</h1>
      
      <div className="row justify-content-center">
        <div className="col-lg-8"> 
          
          {/* SECCIÓN ENUNCIADO */}
          <h2 className="subtitulo-seccion mt-4 mb-3">
            <BookText size={30} className="me-2 text-primary-custom" /> Enunciado
          </h2>
          <p className="lead parrafo-historia">
            Pastelería 1000 Sabores celebra su 50 aniversario como un referente en la repostería chilena. Famosa por su participación en un récord Guinness en 1995, cuando colaboró en la creación de la torta más grande del mundo, la pastelería busca renovar su sistema de ventas online para ofrecer una experiencia de compra moderna y accesible para sus clientes.
          </p>

          {/* SECCIÓN MISIÓN */}
          <h2 className="subtitulo-seccion mt-5 mb-3">
            <Heart size={30} className="me-2 text-primary-custom" /> Misión
          </h2>
          <p className="parrafo-historia">
            Ofrecer una experiencia dulce y memorable a nuestros clientes, proporcionando tortas y productos de repostería de alta calidad para todas las ocasiones, mientras celebramos nuestras raíces históricas y fomentamos la creatividad en la repostería.
          </p>

          {/* SECCIÓN VISIÓN */}
          <h2 className="subtitulo-seccion mt-5 mb-3">
            <Eye size={30} className="me-2 text-primary-custom" /> Visión
          </h2>
          <p className="parrafo-historia mb-5">
            Convertirnos en la tienda online líder de productos de repostería en Chile, conocida por nuestra innovación, calidad y el impacto positivo en la comunidad, especialmente en la formación de nuevos talentos en gastronomía.
          </p>
        </div>
      </div>

    </div>
  );
};

export default SobreNosotros;