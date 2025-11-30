import React from 'react';
import NavBarPrincipal from './components/navbar';
import Sidemenu from './components/sidemenu';
import Detallestestimonio from './components/Detalletestimonio';


function PaginaDetallestestimonio() {
    return (
        <div>
            <NavBarPrincipal/>
            <Sidemenu/>
            <Detallestestimonio/>
            
        </div>
    );
}

export default PaginaDetallestestimonio;