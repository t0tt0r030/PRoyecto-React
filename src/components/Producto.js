import React, { useState, useEffect } from 'react';
import ModalPersonalizacion from './ModalPersonalizacion';

function Producto({ onAddToCart }) {
    const [showCustomModal, setShowCustomModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    
    // Estado para los productos del Backend
    const [productos, setProductos] = useState([]);

     // CONEXIÓN CON BACKEND
    useEffect(() => {
        fetch('http://localhost:3001/api/pasteleriaMilSabores/productos')
            .then(res => res.json())
            .then(data => {
                console.log("Productos cargados desde BD:", data);
                setProductos(data);
            })
            .catch(err => console.error('Error trayendo productos:', err));
    }, []);

    const misProducto = [
        {
            id: 1,
            imgSrc: "/imagenes/4.png",
            alt: "Pastel de Chocolate",
            nombre: "Pastel de Chocolate",
            descripcion: "Un clásico para los amantes del cacao, con un bizcocho húmedo y una suave cobertura.",
            precio: 25000
        },
        {
            id: 2,
            imgSrc: "/imagenes/2.png",
            alt: "Pastel Doble Chocolate",
            nombre: "Pastel Doble Chocolate",
            descripcion: "Doble porción de chocolate, con diferentes concentraciones.",
            precio: 22000
        },
        {
            id: 3,
            imgSrc: "/imagenes/3.png",
            alt: "Pastel de Frutos Rojos",
            nombre: "Pastel Frutos Rojos",
            descripcion: "Una explosión de sabor con crema batida y una mezcla de frutos rojos frescos.",
            precio: 28000
        },
        {
            id: 4,
            imgSrc: "/imagenes/7.png",
            alt: "Pastel helado -frambueza",
            nombre: "Pastel helado frambuesa",
            descripcion: "Una delicia refrescante que combina la acidez vibrante de las frambuesas frescas con la suavidad de nuestro relleno de crema.",
            precio: 48000

        },
        {
            id: 5,
            imgSrc: "/imagenes/5.png",
            alt: "Pastel de almendra",
            nombre: "Pastel de almendras ",
            descripcion: "Una explosión de sabor con crema batida y una mezcla de frutos rojos frescos.",
            precio: 35000
        },
        {
            id: 6,
            imgSrc: "/imagenes/6.png",
            alt: "Pastel Personalizado",
            nombre: "Pastel personalizado",
            descripcion: "Tu imaginación es el ingrediente principal. Elige tu bizcocho favorito, combínalo con rellenos sedosos y la cobertura que prefieras. El pastel de tus sueños, hecho realidad.",
            precio: 33000

        },
    ];

    const handleProductClick = (producto) => {
        setSelectedProduct(producto);
        setShowCustomModal(true);
    };

    const handleConfirmCustomization = (productoPersonalizado) => {
        onAddToCart(productoPersonalizado);
        setShowCustomModal(false);
    };

   
    // INTERFAZ GRÁFICA
    return (
        <section id="productos">
            <div className="container">
                <h2>Nuestros Productos</h2>
                <div className="product-grid">
                    
                    {misProducto.map((producto) => (
                        <div className="product-card" key={producto.id}>
                            <img src={producto.imgSrc} alt={producto.alt} />
                            <div className="product-card-body">
                                <h3>{producto.nombre}</h3>
                                <p>{producto.descripcion}</p>
                                <div className="price-info">
                                    <span className="offer-price">${producto.precio.toLocaleString('es-CL')}</span>
                                </div>
                            </div>

                            <button
                                className="add-to-cart-btn"
                                onClick={() => handleProductClick(producto)}
                            >
                                Agregar al carrito
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal se renderiza condicionalmente si hay un producto seleccionado */}
            {showCustomModal && (
                <ModalPersonalizacion
                    isOpen={showCustomModal}
                    onClose={() => setShowCustomModal(false)}
                    producto={selectedProduct}
                    onConfirm={handleConfirmCustomization}
                />
            )}
        </section>
    );
}

export default Producto;