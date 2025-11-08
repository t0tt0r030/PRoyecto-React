import { render, screen, fireEvent } from '@testing-library/react';
import Producto from '../components/Producto';
import '@testing-library/jest-dom';

const mockOnAddToCart = jest.fn();

describe('Componente Producto - Pruebas Front', () => {

    test('Test 1: Renderiza el título de la sección', () => {
        render(<Producto onAddToCart={mockOnAddToCart} />);
        expect(screen.getByRole('heading', { level: 2, name: /Nuestros Productos/i })).toBeInTheDocument();
    });

    test('Test 2: Renderiza las 6 tarjetas de producto', () => {
        render(<Producto onAddToCart={mockOnAddToCart} />);
        // busca los h3 de cada tarjeta
        const titulosProductos = screen.getAllByRole('heading', { level: 3 });
        expect(titulosProductos).toHaveLength(6);
    });

    test('Test 3: Muestra el precio correcto para el "Pastel de Chocolate"', () => {
        render(<Producto onAddToCart={mockOnAddToCart} />);
        // verifica que el texto del producto esté
        expect(screen.getByText('Pastel de Chocolate')).toBeInTheDocument();
        // obtiene el precio por pantalla mediante el texto, así no se duplica
        expect(screen.getByText('$25.000')).toBeInTheDocument();
    });

    test('Test 4: El botón "Agregar al carrito" llama a la función prop', () => {
        render(<Producto onAddToCart={mockOnAddToCart} />);

        const botonesAgregar = screen.getAllByText(/Agregar al carrito/i);
        fireEvent.click(botonesAgregar[0]);
        expect(mockOnAddToCart).toHaveBeenCalledTimes(1);
        expect(mockOnAddToCart).toHaveBeenCalledWith(expect.objectContaining({
            nombre: 'Pastel de Chocolate',
            precio: 25000
        }));
    });

});