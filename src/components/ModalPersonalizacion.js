import React, { useState, useEffect } from 'react';

function ModalPersonalizacion({ isOpen, onClose, producto, onConfirm }) {
    const [tamano, setTamano] = useState('15 personas');
    const [forma, setForma] = useState('Redonda'); 
    const [mensaje, setMensaje] = useState('');

    const [precioFinal, setPrecioFinal] = useState(producto.precio);


    useEffect(() => {
        let nuevoPrecio = producto.precio;
        if (tamano === '20 personas') nuevoPrecio += 5000;
        if (tamano === '30 personas') nuevoPrecio += 10000;
        setPrecioFinal(nuevoPrecio);
    }, [tamano, producto.precio]);

    if (!isOpen || !producto) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        const productoPersonalizado = {
            ...producto,
            nombre: `${producto.nombre} (${tamano}, ${forma})`,
            precio: precioFinal, // precio actualizado
            detalles: { tamano, forma, mensaje: mensaje || 'Sin mensaje' }
        };
        onConfirm(productoPersonalizado);
    };

    const permitirCambioForma = true; 

    return (
        <div className="cart-modal show" style={{zIndex: 1050}}> 
             <div className="cart-content" style={{ maxWidth: '500px' }}>
                <button className="close-btn" onClick={onClose}>&times;</button>
                <h3>Personaliza tu {producto.nombre}</h3>
                <p className="text-muted">Precio base: ${producto.precio.toLocaleString('es-CL')}</p>

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label className="form-label fw-bold">Tamaño</label>
                        <select className="form-select" value={tamano} onChange={(e) => setTamano(e.target.value)}>
                            <option value="15 personas">15 personas (Base)</option>
                            <option value="20 personas">20 personas (+ $5.000)</option>
                            <option value="30 personas">30 personas (+ $10.000)</option>
                        </select>
                    </div>

                    {permitirCambioForma && (
                        <div className="mb-3">
                            <label className="form-label fw-bold">Forma</label>
                            <div className="d-flex gap-3">
                                <label className="radio-inline">
                                    <input type="radio" name="forma" value="Redonda" checked={forma === 'Redonda'} onChange={(e) => setForma(e.target.value)} /> Redonda
                                </label>
                                <label className="radio-inline">
                                    <input type="radio" name="forma" value="Cuadrada" checked={forma === 'Cuadrada'} onChange={(e) => setForma(e.target.value)} /> Cuadrada
                                </label>
                                <label className="radio-inline">
                                    <input type="radio" name="forma" value="Corazón" checked={forma === 'Corazón'} onChange={(e) => setForma(e.target.value)} /> Corazón
                                </label>
                            </div>
                        </div>
                    )}

                    <div className="mb-4">
                        <label htmlFor="msg" className="form-label fw-bold">Dedicación (Opcional)</label>
                        <input type="text" id="msg" className="form-control" placeholder="Feliz día!" value={mensaje} onChange={(e) => setMensaje(e.target.value)} maxLength={40} />
                    </div>

                    <h4 className="text-end mb-3">Total: ${precioFinal.toLocaleString('es-CL')}</h4>

                    <button type="submit" className="cta-button full-width">
                        Confirmar Personalización
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ModalPersonalizacion;