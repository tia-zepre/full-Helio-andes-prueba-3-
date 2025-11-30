import React from 'react';
import NavBarPrincipal from './components/navbar';
import Sidemenu from './components/sidemenu';
import Galeria from './components/galeria';


function ListaGaleria() {
    return (
        <div>
            <NavBarPrincipal/>
            <Sidemenu/>
            <Galeria/>
            
        </div>
    );
}

export default ListaGaleria;