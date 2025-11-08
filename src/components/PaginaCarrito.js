import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function PaginaCarrito({ cartItems, onRemove, onUpdate }) {
    // ESTADOS PARA DESCUENTO 
    const [codigoDesc, setCodigoDesc] = useState('');
    const [descuentoAplicado, setDescuentoAplicado] = useState(0);
    const [mensajeDesc, setMensajeDesc] = useState('');


    const getSubtotal = () => {
        return cartItems.reduce((total, item) => total + item.precio * item.quantity, 0);
    };


    const getTotal = () => {
        const subtotal = getSubtotal();
        return subtotal - (subtotal * descuentoAplicado);
    };

    // Lógica de validación de cupón
    const aplicarDescuento = () => {
        const codigo = codigoDesc.trim().toUpperCase();
        if (codigo === 'FELICES50') {
            setDescuentoAplicado(0.10);
            setMensajeDesc('🎉 Descuento del 10% aplicado!!');
        } else {
            setDescuentoAplicado(0);
            setMensajeDesc('❌ Código no válido');
        }
    };

    return (
        <div className="cart-page-container container my-5">
            <div className="cart-content" style={{ position: 'static', maxWidth: '800px', margin: 'auto' }}>
                <h2 className="text-center mb-4">Tu Carrito de Compras</h2>

                {cartItems.length === 0 ? (
                    <div className="text-center py-5">
                        <p className="fs-4 text-muted mb-4">Tu carrito está vacío.</p>
                        <Link to="/" className="cta-button px-4 py-2">
                            Volver a Productos
                        </Link>
                    </div>
                ) : (
                    <>
                        <div className="cart-items-wrapper border rounded p-3 mb-4 bg-white">
                            <ul className="cart-items list-unstyled mb-0">
                                {cartItems.map(item => (
                                    <li key={item.id} className="cart-item d-flex align-items-center border-bottom py-3">
                                        <img src={item.imgSrc} alt={item.alt} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px', marginRight: '20px' }} />
                                        <div className="cart-item-info flex-grow-1">
                                            <h5 className="mb-1">{item.nombre}</h5>
                                            <p className="text-muted mb-0">${item.precio.toLocaleString('es-CL')} c/u</p>
                                        </div>
                                        <div className="cart-item-actions d-flex align-items-center gap-3">
                                            <input
                                                type="number"
                                                value={item.quantity}
                                                min="1"
                                                onChange={(e) => onUpdate(item.id, parseInt(e.target.value) || 1)}
                                                className="form-control text-center"
                                                style={{ width: '70px' }}
                                            />
                                            <button className="remove-btn btn btn-outline-danger btn-sm" onClick={() => onRemove(item.id)}>
                                                <i className="fas fa-trash-alt"></i> Quitar
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="row">
                            {/* SECCIÓN CÓDIGO DE DESCUENTO */}
                            <div className="col-md-6 mb-4">
                                <div className="discount-section p-4 bg-light rounded h-100">
                                    <h5 className="mb-3">Código de Descuento</h5>
                                    <div className="input-group mb-2">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Ej: DULCE10"
                                            value={codigoDesc}
                                            onChange={(e) => setCodigoDesc(e.target.value)}
                                        />
                                        <button className="btn btn-secondary" type="button" onClick={aplicarDescuento}>
                                            Aplicar
                                        </button>
                                    </div>
                                    {mensajeDesc && <small className={descuentoAplicado > 0 ? 'text-success fw-bold' : 'text-danger'}>{mensajeDesc}</small>}
                                </div>
                            </div>

                            {/* RESUMEN DE TOTALES */}
                            <div className="col-md-6 mb-4">
                                <div className="cart-summary p-4 bg-light rounded h-100">
                                    <h5 className="mb-3">Resumen del Pedido</h5>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span className="text-muted">Subtotal:</span>
                                        <span>${getSubtotal().toLocaleString('es-CL')}</span>
                                    </div>
                                    
                                    {descuentoAplicado > 0 && (
                                        <div className="d-flex justify-content-between mb-2 text-success">
                                            <span>Descuento:</span>
                                            <span>-${(getSubtotal() * descuentoAplicado).toLocaleString('es-CL')}</span>
                                        </div>
                                    )}
                                    
                                    <hr />
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="fs-5 fw-bold">Total a Pagar:</span>
                                        <span className="fs-3 fw-bold text-primary">${getTotal().toLocaleString('es-CL')}</span>
                                    </div>
                                    
                                    <button className="cta-button full-width mt-4 py-3 fs-5">
                                        Proceder al Pago
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default PaginaCarrito;