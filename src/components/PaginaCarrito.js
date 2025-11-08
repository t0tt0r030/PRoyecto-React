import React from 'react';
import { Link } from 'react-router-dom';


function PaginaCarrito({ cartItems, onRemove, onUpdate }) {

  // Calcula el precio total
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.precio * item.quantity, 0);
  };

  return (
    <div className="cart-page-container container my-5">
      <div className="cart-content" style={{ position: 'static', maxWidth: '800px', margin: 'auto' }}>
        <h2 className="text-center mb-4">Tu Carrito</h2>
        
        {cartItems.length === 0 ? (
          <div className="text-center">
            <p>Tu carrito está vacío.</p>
            <Link to="/" className="cta-button">
              Volver a Productos
            </Link>
          </div>
        ) : (
          <>
            <ul className="cart-items">
              {cartItems.map(item => (
                <li key={item.id} className="cart-item">
                  <img src={item.imgSrc} alt={item.alt} style={{width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px', marginRight: '15px'}} />
                  <div className="cart-item-info">
                    <h4>{item.nombre}</h4>
                    <p>${item.precio.toLocaleString('es-CL')} c/u</p>
                  </div>
                  <div className="cart-item-actions">
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) => {
                        const newQuantity = parseInt(e.target.value, 10) || 1;
                        onUpdate(item.id, newQuantity);
                      }}
                      className="form-control"
                      style={{ width: '70px', textAlign: 'center' }}
                    />
                    <button className="remove-btn" onClick={() => onRemove(item.id)}>
                      Quitar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="cart-summary mt-4">
              <h3 className="text-end">Total: <span className="total-price">${getTotalPrice().toLocaleString('es-CL')}</span></h3>
              <button className="cta-button full-width mt-3">
                Ir a Pagar
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default PaginaCarrito;