import React, { useState } from 'react';

function Cart({ isOpen, onClose, cartItems, onRemove, onUpdate }) {
    const [codigoDesc, setCodigoDesc] = useState('');
    const [descuentoAplicado, setDescuentoAplicado] = useState(0);
    const [mensajeDesc, setMensajeDesc] = useState('');

    if (!isOpen) return null;


    const getSubtotal = () => {
        return cartItems.reduce((total, item) => total + item.precio * item.quantity, 0);
    };

    const getTotal = () => {
        const subtotal = getSubtotal();
        return subtotal - (subtotal * descuentoAplicado);
    };
    // cupón
    const aplicarDescuento = () => {
        const codigo = codigoDesc.trim().toUpperCase();
    
    if (codigo === 'FELICES50') {
            setDescuentoAplicado(0.10);
            setMensajeDesc('🎉 ¡Súper descuento del 10% aplicado!');
        } else {
            setDescuentoAplicado(0);
            setMensajeDesc('❌ Código no válido');
        }
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
                                            onChange={(e) => onUpdate(item.id, parseInt(e.target.value) || 1)}
                                            style={{ width: '60px', textAlign: 'center' }}
                                         />
                                         <button className="remove-btn" onClick={() => onRemove(item.id)}>Quitar</button>
                                    </div>
                                </li>
                           ))}
                        </ul>

                        {/* SECCIÓN CÓDIGO DE DESCUENTO */}
                        <div className="discount-section mt-3 p-3 bg-light rounded" style={{color: '#333'}}> 
                            <label className="form-label fw-bold">¿Tienes un código?</label>
                            <div className="input-group mb-2">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Ej: DULCE10"
                                    value={codigoDesc}
                                    onChange={(e) => setCodigoDesc(e.target.value)}
                                />
                                <button className="btn btn-outline-secondary" type="button" onClick={aplicarDescuento}>
                                    Aplicar
                                </button>
                            </div>
                            {mensajeDesc && <small className={descuentoAplicado > 0 ? 'text-success' : 'text-danger'}>{mensajeDesc}</small>}
                        </div>

                        {/* RESUMEN DE TOTALES */}
                        <div className="cart-summary mt-3">
                            <div className="d-flex justify-content-between">
                                <span>Subtotal:</span>
                                <span>${getSubtotal().toLocaleString('es-CL')}</span>
                            </div>
                            
                            {descuentoAplicado > 0 && (
                                <div className="d-flex justify-content-between text-success">
                                    <span>Descuento:</span>
                                    <span>-${(getSubtotal() * descuentoAplicado).toLocaleString('es-CL')}</span>
                                </div>
                            )}
                            
                            <div className="d-flex justify-content-between fw-bold fs-5 mt-2">
                                <span>Total:</span>
                                <span className="total-price">${getTotal().toLocaleString('es-CL')}</span>
                            </div>
                            
                            <button className="cta-button mt-3" style={{width: '100%'}}>Ir a Pagar</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Cart;