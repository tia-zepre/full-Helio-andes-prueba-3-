import React from 'react';
import NavBarPrincipal from './components/navbar';
import Sidemenu from './components/sidemenu';
import TestimonioLista from './components/testimonio_list';


function ListaTestimonio() {
    return (
        <div>
            <NavBarPrincipal/>
            <Sidemenu/>
            <TestimonioLista/>
            
        </div>
    );
}

export default ListaTestimonio;