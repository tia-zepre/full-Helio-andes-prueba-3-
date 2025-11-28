import React from 'react';
import NavbarPrincipal from '../Assest/components/Navbar'
import Footer from '../Assest/components/Footer';
import Demo from'../Assest/components/CalculadoraIntegral';

function pageDemos() {
  return (
    <div>
        <NavbarPrincipal/>
        <Demo />
        <Footer/>   
    </div >

    
  );
}

export default pageDemos;
