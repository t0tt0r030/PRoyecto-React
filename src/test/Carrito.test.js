import { render, screen, fireEvent } from '@testing-library/react';
import Carrito from '../components/Carrito';
import '@testing-library/jest-dom';

// datos de prueba simulados
const mockCarritoLleno = [
    { id: 1, nombre: 'Pastel de Chocolate', precio: 25000, cantidad: 2, imgSrc: 'chocolate.jpg' },
    { id: 3, nombre: 'Pastel Frutos Rojos', precio: 28000, cantidad: 1, imgSrc: 'frutos.png' }
];
// mocks
const mockOnClose = jest.fn();
const mockOnRemove = jest.fn();
const mockOnUpdateQuantity = jest.fn();

describe('Componente Carrito Modal - Pruebas Front', () => {

    test('Test 1: Muestra mensaje cuando el carrito está vacío', () => {
        render(<Carrito carrito={[]} onClose={mockOnClose} />);
        // verifica que aparezca el texto de carrito vacío
        expect(screen.getByText(/Tu carrito está vacío/i)).toBeInTheDocument();
        // verifica que el total sea $0
        expect(screen.getByText(/\$0/)).toBeInTheDocument();
    });

    test('Test 2: Renderiza correctamente los items del carrito', () => {
        render(
            <Carrito 
                carrito={mockCarritoLleno} 
                onClose={mockOnClose} 
                onRemove={mockOnRemove} 
                onUpdateQuantity={mockOnUpdateQuantity} 
            />
        );

        // Verifica que los nombres de los productos estén presentes
        expect(screen.getByText('Pastel de Chocolate')).toBeInTheDocument();
        expect(screen.getByText('Pastel Frutos Rojos')).toBeInTheDocument();
        // Verifica que las cantidades sean correctas (inputs de tipo number o texto)
        expect(screen.getByDisplayValue('2')).toBeInTheDocument();
        expect(screen.getByDisplayValue('1')).toBeInTheDocument();
    });

    test('Test 3: Calcula y muestra el precio total correcto', () => {
        render(<Carrito carrito={mockCarritoLleno} onClose={mockOnClose} />);
        
        // Total esperado: (25000 * 2) + (28000 * 1) = 50000 + 28000 = 78000
        // Buscamos el formato chileno aproximado
        expect(screen.getByText(/\$78\.000/)).toBeInTheDocument();
    });

    test('Test 4: El botón de cerrar llama a la función onClose', () => {
        render(<Carrito carrito={[]} onClose={mockOnClose} />);
        
        // Busca el botón de cerrar (usualmente una "X" o texto "Cerrar")
        // Ajusta el selector según tu implementación real (ej. aria-label="Cerrar carrito")
        const closeButton = screen.getByRole('button', { name: /×|Cerrar/i });
        
        fireEvent.click(closeButton);
        
        expect(mockOnClose).toHaveBeenCalledTimes(1);
    });

});