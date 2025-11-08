import React from 'react';
import Heder from './components/Heder';
import Login from './components/Login';
import Registro from './components/Registro';
import Info from './components/Info';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Faq from './components/Faq';
import Producto from './components/Producto'; 
import Nosotros from './components/Nosotros';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';
import './styles/Carousel.css';
import './styles/Login.css';
import './styles/Info.css';





function App ()
{
  return(
    <>
      <Heder />
      <Producto/>
      <Carousel />
      <Info />
      <Faq />
      <Nosotros/>
      <Footer />
    </>
    
  )
}
export default App;
