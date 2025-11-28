import React from 'react';
import NavbarPrincipal from '../Assest/components/Navbar'
import Footer from '../Assest/components/Footer';
import Politica from '../Assest/components/Politica';
import Terminos from '../Assest/components/Terminos';


function PoliticaPagina() {
  return (
    <div>
        <NavbarPrincipal/>
        <Politica/>
        <Terminos/>
        <Footer/>   
    </div >

    
  );
}

export default PoliticaPagina;
