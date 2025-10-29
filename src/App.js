import React from 'react';
import Heder from './components/Heder';
import Login from './components/Login';
import Registro from './components/Registro';
import Info from './components/Info';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Faq from './components/Faq';

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
      <Heder />,
      <Carousel />,
      <Info />,
      <Faq />,
      <Footer />
    </>
    
  )
}
export default App;
