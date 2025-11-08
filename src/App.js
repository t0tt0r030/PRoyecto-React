import React, { useState, useEffect } from 'react'; 
import { Routes, Route } from 'react-router-dom'; 

// Importamos los componentes
import Heder from './components/Heder';
import Info from './components/Info';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Faq from './components/Faq';
import Producto from './components/Producto'; 
import Nosotros from './components/Nosotros';
import PaginaCarrito from './components/PaginaCarrito.js'; 
import Notificacion from './components/Notificacion.js'; 

// Importamos los estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';
import './styles/Carousel.css';
import './styles/Login.css';
import './styles/Info.css';

function App () {
  
  
  const [cartItems, setCartItems] = useState([]);
  const [toastMessage, setToastMessage] = useState("");

  // Función para AGREGAR productos al carrito 
  const handleAddToCart = (product) => {
    setCartItems(prevItems => {
      const itemExists = prevItems.find(item => item.id === product.id);
      
      if (itemExists) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    
    
    setToastMessage(`¡"${product.nombre}" agregado al carrito!`);
    setTimeout(() => {
      setToastMessage("");
    }, 3000);
  };

  // Función para QUITAR productos del carrito
  const handleRemoveFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  // Función para ACTUALIZAR la cantidad
  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      handleRemoveFromCart(productId);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  useEffect(() => {
    return () => {
      const allTimers = setTimeout(function() {}, 0);
      for (let i = 0; i < allTimers; i++) {
        clearTimeout(i);
      }
    };
  }, []);


  return(
    <>
      <Notificacion message={toastMessage} />
      
      <Heder cartItems={cartItems} />
      
      <Routes>
        <Route path="/" element={
          <>
            <Carousel />
            <Producto onAddToCart={handleAddToCart} />
            <Info />
            <Faq />
            <Nosotros/>
          </>
        } />
        
        <Route path="/carrito" element={
          <PaginaCarrito 
            cartItems={cartItems} 
            onRemove={handleRemoveFromCart} 
            onUpdate={handleUpdateQuantity} 
          />
        } />
      </Routes>
      
      <Footer />
    </>
  );
}
export default App;