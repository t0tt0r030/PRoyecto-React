import { render, screen } from '@testing-library/react';
import Carousel from '../components/Carousel';
import '@testing-library/jest-dom';

// Mock de Swiper para evitar problemas de renderizado en Jest
jest.mock('swiper/react', () => ({
  Swiper: ({ children }) => <div data-testid="swiper-container">{children}</div>,
  SwiperSlide: ({ children }) => <div data-testid="swiper-slide">{children}</div>,
}));

// Mock de los módulos de Swiper
jest.mock('swiper/modules', () => ({
    Autoplay: () => null,
    Pagination: () => null,
    Navigation: () => null,
}));

describe('Componente Carousel - Pruebas Front', () => {
    test('Test 1: Renderiza el contenedor principal del Swiper', () => {
        render(<Carousel />);
        expect(screen.getByTestId('swiper-container')).toBeInTheDocument();
    });

    test('Test 2: Renderiza exactamente 5 slides (imágenes)', () => {
        render(<Carousel />);
        const slides = screen.getAllByTestId('swiper-slide');
        expect(slides).toHaveLength(5); //<- cantidad de imagenes que queremos testear
    });

    test('Test 3: Las imágenes tienen rutas válidas (verificación de muestra)', () => {
        render(<Carousel />);
        const imagenes = screen.getAllByRole('img');
        // verifica que la primera imagen sea la de chocolate
        expect(imagenes[0]).toHaveAttribute('src', './imagenes/chocolate.jpg');
        // verifica que la quinta imagen sea la de vainilla
        expect(imagenes[4]).toHaveAttribute('src', './imagenes/vainilla.png');
    });

    test('Test 4: No hay imágenes rotas sin atributo src', () => {
        render(<Carousel />);
        const imagenes = screen.getAllByRole('img');
        imagenes.forEach(img => {
            expect(img).toHaveAttribute('src');
            expect(img.getAttribute('src')).not.toBe('');
        });
    });
});