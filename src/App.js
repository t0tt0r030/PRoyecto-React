import React from 'react';
import Heder from './components/Heder';
import Login from './components/Login';
import Registro from './components/Registro';
import Info from './components/Info';
import Carousel from './components/Carousel';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import './styles/Login.css';
import './styles/Info.css';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



function App ()
{
  return(
    <>
    <Carousel/>
    </>
  )
}
export default App;
