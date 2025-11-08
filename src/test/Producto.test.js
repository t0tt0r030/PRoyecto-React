import { render, screen } from '@testing-library/react';
import Producto from '../components/Producto'; 
import '@testing-library/jest-dom';

describe('Componente Producto (Pastelería) - Pruebas Front', () => {

    // Prueba 1: Verifica renderización sin errores
    test('Test 1: Renderiza la sección de productos y su título principal', () => {
        render(<Producto />);
        // Verificamos que el título principal esté presente
        const titulo = screen.getByText('Nuestros Productos');
        expect(titulo).toBeInTheDocument();
        // alternativa, buscar por rol y nivel de encabezado
        expect(screen.getByRole('heading', { level: 2, name: /Nuestros Productos/i })).toBeInTheDocument();
    });

    // Prueba 2: Conteo de items 
    test('Test 2: Renderiza productos y que cuente con 6 tarjetas de producto', () => {
        render(<Producto />);
        // Buscamos todos los encabezados h3, guiandonos por el orden de h3 en las tarjetas
        const tarjetasProducto = screen.getAllByRole('heading', { level: 3 });
        expect(tarjetasProducto).toHaveLength(6);
    });

    // Prueba 3: Contenido específico - Verifica detalles de un producto clave
    test('Test 3: Muestra detalles correctos del "Pastel de Chocolate"', () => {
        render(<Producto />);
        // Verificamos que el nombre exista
        expect(screen.getByText("Pastel de Chocolate")).toBeInTheDocument();
        // Verificamos que su precio formateado exista ($25.000 para esta prueba)
        expect(screen.getByText("$25.000")).toBeInTheDocument();
    });

    // Prueba 4: Elementos interactivos - Verifica que existan los botones de compra
    test('Test 4: Renderiza un botón "Agregar al carrito" por cada producto', () => {
        render(<Producto />);
        const botonesAgregar = screen.getAllByRole('button', { name: /Agregar al carrito/i });
        expect(botonesAgregar).toHaveLength(6);
    });

});