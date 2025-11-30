import React from 'react';
import NavBarPrincipal from './components/navbar';
import Sidemenu from './components/sidemenu';
import DetallesServicio from './components/DetallesServicio';


function PaginaDetallesServicio() {
    return (
        <div>
            <NavBarPrincipal/>
            <Sidemenu/>
            <DetallesServicio/>
            
        </div>
    );
}

export default PaginaDetallesServicio;