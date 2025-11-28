import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/admin/dashboar';
import ServiciosAdmin from './pages/admin/ListaServicios';
import Home from './pages/home';
import Servicios from './pages/pageServicios';
import Soluciones from './pages/PageSoluciones';
import Demos from './pages/demos';
import Planes from './pages/pagePlanes';
import Testimonios from './pages/pageTestimonios';
import FAQ from './pages/pageFaq';
import Contacto from './pages/pageContacto';
import PoliticaPagina from './pages/PoliticaPagina';





function App() {
  return (
    <Router>
      <Routes>
        <Route path='/admin'          element={<Dashboard/>}></Route>
        <Route path='/adminServicios' element={<ServiciosAdmin/>}></Route>
        <Route path='/'               element={<Home/>}></Route>
        <Route path='/servicios'      element={<Servicios/>}></Route>
        <Route path='/soluciones'     element={<Soluciones />}></Route>
        <Route path='/demos'          element={<Demos/>}></Route>
        <Route path='/planes'         element={<Planes/>}></Route>
        <Route path='/testimonios'    element={<Testimonios/>}></Route>
        <Route path='/faq'            element={<FAQ/>}></Route>
        <Route path='/contacto'       element={<Contacto/>}></Route>
        <Route path='/PoliticaPagina' element={<PoliticaPagina/>}></Route>
        <Route path='/admin/home'     element={<Dashboard/>}></Route>
  
      </Routes>
    </Router>    
  );
}

export default App;
