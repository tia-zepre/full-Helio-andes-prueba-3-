import React from 'react';
import NavBarPrincipal from './components/navbar';
import Sidemenu from './components/sidemenu';
import SolucionesLista from './components/soluciones_list';


function ListaSoluciones() {
    return (
        <div>
            <NavBarPrincipal/>
            <Sidemenu/>
            <SolucionesLista/>
            
        </div>
    );
}

export default ListaSoluciones;