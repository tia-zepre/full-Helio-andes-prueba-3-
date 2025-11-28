
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'; // ← CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // ← JS con Popper incluido es para que funcione el acordeon xd



function FAQ() {
  return (
    <div className="container">
      
      <div >
        <div className="col-12 d-flex justify-content-between  p-1 mb-1"  >
          <h4 className="fw-bold  mb-0">FAQ</h4>
          <p className="text-secondary fst-italic ms-3">
            Preguntas frecuentes
          </p>
        </div>
      </div>


      <div className='accordion' id='chapters'>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='heading-1'>
            <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#chapter-1' aria-expanded='false' aria-controls='collapse-1'>
              ¿Qué garantía ofrecen?
            </button>
          </h2>

          <div id='chapter-1' className='accordion-collapse collapse' aria-labelledby='heading-1' data-bs-parent='#chapters'>
            <div className='accordion-body'>
              <p>Paneles con garantía de hasta 25 años y respaldo técnico en instalación y funcionamiento.</p>
            </div>
          </div>

        </div>

        <div className='accordion-item'>
          <h2 className='accordion-header' id='heading-2'>
            <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#chapter-2' aria-expanded='false' aria-controls='collapse-2'>
              ¿Los sistemas requieren mantención?
            </button>
          </h2>

          <div id='chapter-2' className='accordion-collapse collapse' aria-labelledby='heading-2' data-bs-parent='#chapters'>
            <div className='accordion-body'>
              <p>Sí, solo una revisión y limpieza anual para asegurar su rendimiento óptimo.</p>
            </div>
          </div>
        </div>

        <div className='accordion-item'>
          <h2 className='accordion-header' id='heading-3'>
            <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#chapter-3' aria-expanded='false' aria-controls='collapse-3'>
              ¿Cuánto tarda la instalación?
            </button>
          </h2>

          <div id='chapter-3' className='accordion-collapse collapse' aria-labelledby='heading-3' data-bs-parent='#chapters'>
            <div className='accordion-body'>
              <p>Entre 5 y 10 días hábiles según el tamaño del sistema y la ubicación.</p>
            </div>
          </div>
        </div>

        <div className='accordion-item'>
          <h2 className='accordion-header' id='heading-4'>
            <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#chapter-4' aria-expanded='false' aria-controls='collapse-4'>
              ¿Qué necesito para instalar paneles solares?
            </button>
          </h2>

          <div id='chapter-4' className='accordion-collapse collapse' aria-labelledby='heading-4' data-bs-parent='#chapters'>
            <div className='accordion-body'>
              <p>Una red eléctrica en buen estado y conexión a la red pública, según norma SEC.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default FAQ;

