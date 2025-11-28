import React from 'react';
import NavbarPrincipal from '../Assest/components//Navbar'
import Banner from '../Assest/components/Banner';
import Footer from '../Assest/components/Footer';
import FAQ from '../Assest/components/FAQ';



function home() {
  return (
    <div>
      <NavbarPrincipal/>
      <Banner/> 
      <FAQ/>
      <Footer/>   
    </div >

    
  );
}

export default home;
