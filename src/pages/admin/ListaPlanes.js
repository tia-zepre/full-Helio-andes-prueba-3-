import React from 'react';
import NavBarPrincipal from './components/navbar';
import Sidemenu from './components/sidemenu';
import PlanesLista from './components/planes_list';


function ListaPlanes() {
    return (
        <div>
            <NavBarPrincipal/>
            <Sidemenu/>
            <PlanesLista/>
            
        </div>
    );
}

export default ListaPlanes;