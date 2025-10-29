import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';


//*Componenetes PRopio */
import Heder from './components/Heder';
import SobreNosotros from './components/SobreNosotros'; // <-- 1. IMPORTA EL COMPONENTE

function App ()
{
  return(
    <>
      <Heder/>
      <SobreNosotros /> {/* <-- 2. AÑADE EL COMPONENTE AQUÍ */}
    </>
  )
}

export default App;