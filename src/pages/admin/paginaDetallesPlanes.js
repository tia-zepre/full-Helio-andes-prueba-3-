import React from 'react';
import NavBarPrincipal from './components/navbar';
import Sidemenu from './components/sidemenu';
import DetallesPlanes from './components/DetallePlanes';


function PaginaDetallesPlanes() {
    return (
        <div>
            <NavBarPrincipal/>
            <Sidemenu/>
            <DetallesPlanes/>
            
        </div>
    );
}

export default PaginaDetallesPlanes;