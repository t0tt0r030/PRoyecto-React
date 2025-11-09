import { render, screen, fireEvent } from '@testing-library/react';
import Cart from '../components/Carrito';
import '@testing-library/jest-dom';

const mockCarrito = [
    { id: 1, nombre: 'Pastel de Chocolate', precio: 25000, quantity: 2 },
    { id: 3, nombre: 'Pastel Frutos Rojos', precio: 28000, quantity: 1 }
];

const mockOnClose = jest.fn();
const mockOnRemove = jest.fn();
const mockOnUpdate = jest.fn();

describe('Componente Carrito (Modal) - Pruebas Front', () => {

    test('Test 1: No renderiza nada si isOpen es false', () => {
        const { container } = render(<Cart isOpen={false} onClose={mockOnClose} cartItems={[]} />);
        expect(container).toBeEmptyDOMElement();
    });

    test('Test 2: Muestra mensaje cuando el carrito está vacío', () => {
        render(<Cart isOpen={true} onClose={mockOnClose} cartItems={[]} />);
        expect(screen.getByText(/Tu carrito está vacío/i)).toBeInTheDocument();
    });

    test('Test 3: Renderiza los items y el total correcto', () => {
        render(
            <Cart 
                isOpen={true} 
                cartItems={mockCarrito} 
                onClose={mockOnClose} 
                onRemove={mockOnRemove} 
                onUpdate={mockOnUpdate} 
            />
        );

        // items
        expect(screen.getByText('Pastel de Chocolate')).toBeInTheDocument(); //nombre
        expect(screen.getByDisplayValue('2')).toBeInTheDocument(); // cantidad
        
        // verifica total: (25000*2) + 28000 = 78000 ----> operación sencilla de carrito especificada en lista mockCarrito.
        const preciosEncontrados = screen.getAllByText(/\$78\.000/);
        expect(preciosEncontrados.length).toBeGreaterThanOrEqual(1);
        // ^ puede aparecer más de una vez el resultado, ya que muestra un subtotal y total, sin contar el código de descuento.
        // ^ no pasa las pruebas unitarias sin esta linea, debido a lo mismo.
    });

    test('Test 4: El botón de cerrar llama a onClose', () => {
        render(<Cart isOpen={true} cartItems={[]} onClose={mockOnClose} />);
        const closeBtn = screen.getByRole('button', { name: /×/i }); 
        fireEvent.click(closeBtn);
        expect(mockOnClose).toHaveBeenCalledTimes(1);
    });

});