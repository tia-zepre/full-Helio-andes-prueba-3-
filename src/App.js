import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


/* paginas admin*/
import Dashboard from './pages/admin/dashboar';
import ServiciosAdmin from './pages/admin/ListaServicios';
import DetallesServicio from './pages/admin/paginaDetallesServicio';
import PlanesAdmin from './pages/admin/ListaPlanes';
import SolucionesAdmin from './pages/admin/listaSoluciones';
import TestimonioAdmin from './pages/admin/listaTestimonio';
import Galeria from './pages/admin/ListaGaleria'
import DetallesSoluciones from './pages/admin/paginaDetallesSoluciones';
import DetallesPlanes from './pages/admin/paginaDetallesPlanes';
import DetallesTestimonio from './pages/admin/paginaDetallesTestimonio';



/* paginas general */
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
        {/* paginas admin*/}
        <Route path='/admin' element={<Dashboard />}></Route>
        <Route path='/adminServicios' element={<ServiciosAdmin />}></Route>
        <Route path='/adminSoluciones' element={<SolucionesAdmin />}></Route>
        <Route path='/adminPlanes' element={<PlanesAdmin />}></Route>
        <Route path='/adminTestimonio' element={<TestimonioAdmin/>}></Route>
        <Route path='/galeria' element={<Galeria/>}></Route>
        
        <Route path='/servicios/:id' element={<DetallesServicio />} />
        <Route path='/soluciones/:id' element={<DetallesSoluciones  />} />
        <Route path='/planes/:id' element={<DetallesPlanes />} />
        <Route path='/testimonios/:id' element={<DetallesTestimonio />} />

        {/* paginas publicas */}

        <Route path='/' element={<Home />}></Route>
        <Route path='/servicios' element={<Servicios />}></Route>
        <Route path='/soluciones' element={<Soluciones />}></Route>
        <Route path='/demos' element={<Demos />}></Route>
        <Route path='/planes' element={<Planes />}></Route>
        <Route path='/testimonios' element={<Testimonios />}></Route>
        <Route path='/faq' element={<FAQ />}></Route>
        <Route path='/contacto' element={<Contacto />}></Route>
        <Route path='/PoliticaPagina' element={<PoliticaPagina />}></Route>


      </Routes>
    </Router>
  );
}

export default App;
