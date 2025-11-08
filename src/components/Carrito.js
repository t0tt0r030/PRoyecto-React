import React from 'react';

/**
 * Componente del modal del carrito.
 * @param {object} props
 * @param {boolean} props.isOpen - Si el modal está abierto o no.
 * @param {function} props.onClose - Función para cerrar el modal.
 * @param {Array} props.cartItems - Array de productos en el carrito.
 * @param {function} props.onRemove - Función para eliminar un item del carrito.
 * @param {function} props.onUpdate - Función para actualizar la cantidad de un item.
 */
function Cart({ isOpen, onClose, cartItems, onRemove, onUpdate }) {
  if (!isOpen) {
    return null;
  }

  // Calcula el precio total
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.precio * item.quantity, 0);
  };

  return (
    <div className="cart-modal show">
      <div className="cart-content">
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2>Tu Carrito</h2>
        
        {cartItems.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <>
            <ul className="cart-items">
              {cartItems.map(item => (
                <li key={item.id} className="cart-item">
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
                      style={{ width: '60px', textAlign: 'center' }}
                    />
                    <button className="remove-btn" onClick={() => onRemove(item.id)}>
                      Quitar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="cart-summary">
              <p>Total: <span className="total-price">${getTotalPrice().toLocaleString('es-CL')}</span></p>
              <button className="cta-button" style={{width: '100%'}}>Ir a Pagar</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;