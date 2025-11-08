import { render, screen } from '@testing-library/react';

import PaginaCarrito from '../components/PaginaCarrito';
import '@testing-library/jest-dom';

jest.mock('react-router-dom', () => ({
  Link: ({ to, children, className }) => <a href={to} className={className}>{children}</a>,
}), { virtual: true });

describe('Componente PaginaCarrito - Pruebas Front', () => {
    test('Test 1: Muestra mensaje de carrito vacío y botón de volver', () => {
        render(
                <PaginaCarrito cartItems={[]} />
        );
        expect(screen.getByText(/Tu carrito está vacío/i)).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Volver a Productos/i })).toBeInTheDocument();
    });

    test('Test 2: Renderiza la lista de productos cuando hay items', () => {
        const items = [{ id: 1, nombre: 'Pastel Test', precio: 10000, quantity: 1, imgSrc: 'img.jpg', alt: 'Pastel Test' }];
        render(
                <PaginaCarrito cartItems={items} />
        );
        expect(screen.getByText('Pastel Test')).toBeInTheDocument();
        expect(screen.getByRole('img', { name: /Pastel Test/i })).toBeInTheDocument(); 
    });
});