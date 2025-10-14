import React from "react";

function Header()
{

    const nombre ="Pasteleria mil Sabores";
    const logo = "./imagenes/logo.png";

    return (
       <header className="text-white py-5" style={{ backgroundColor: '#FFD1DC' }}>
    <div className="container">
        <div className="row align-items-center">
            <div className="col-md-3 text-center-3 mb-md-0">
                <img 
                src={logo}
                alt={`Foto de ${nombre}`}
                className="rounded-circle img-fluid border border-white border-3"
                style={{maxWidth:'150px'}} />
   
                    </div>
                    <div className="col-md-9">
                        <h1 className="display-4 fw-bold mb-2">
                            {nombre}
                        </h1>

                        
                    </div>
                </div>
            </div> 


        </header>
    )

}

export default Header;