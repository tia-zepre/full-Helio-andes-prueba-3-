import React from 'react';
import NavBarPrincipal from './components/navbar';
import Sidemenu from './components/sidemenu';
import DetallesSoluciones from './components/DetallesSoluciones';


function PaginaDetallesSoluciones() {
    return (
        <div>
            <NavBarPrincipal/>
            <Sidemenu/>
            <DetallesSoluciones/>
            
        </div>
    );
}

export default PaginaDetallesSoluciones;