import React from 'react';
import Container from 'react-bootstrap/Container';

import Card from 'react-bootstrap/Card';
import logoEstudio from '../Images/logo2.jpg';
import logoInstalacion from '../Images/logo3.jpg';
import monitoreopaneles from '../Images/monitoreopaneles.jpg';
import mantenimiento from '../Images/mantenimiento.jpg';




function Servicios() {

  return (
    

    <div className='container mt-4' >
       <div className="col-12 d-flex justify-content-between  p-1 mb-1"  >
          <h4 className="fw-bold  mb-0">Servicios</h4>
          <p className="text-secondary fst-italic ms-3">
            Estudio Energético, instalación Certificada,monitoreo y mantención. 
          </p>
        </div>


      <div className='row' >
        <div className=' col-lg-3' >
          <Card className="h-100" style={{ width: '100%' }}>
            <Card.Img variant="top" src={logoEstudio} style={{ width: '100', height: '150px', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title>Estudio Energético</Card.Title>
              <Card.Text>
                Análisis detallado del consumo de energía para  dimensionar el sistema fotovoltaico óptimo para tu hogar o pyme, maximizando el ahorro y la eficiencia.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>



        <div className=' col-lg-3' >
          <Card className="h-100" style={{ width: '100%' }}>
            <Card.Img variant="top" src={logoInstalacion} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title>Instalación Certificada</Card.Title>
              <Card.Text>
                Montaje e implementación del sistema solar fotovoltaico cumpliendo con todas las normativas y estándares de seguridad de la Superintendencia  de Electricidad y combustibles.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>



        <div className=' col-lg-3'>
          <Card  className="h-100" style={{ width: '100%' }}>
            <Card.Img variant="top" src={monitoreopaneles} style={{ width: '100', height: '150px', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title>Monitoreo</Card.Title>
              <Card.Text>
                Seguimiento continuo del rendimiento de tu planta solar a través de plataformas          digitales, permitiendo detectar fallas rápidamente y asegurar la máxima producción de energía.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>


        <div className=' col-lg-3'>
          <Card className="h-100"  style={{ width: '100%' }}>
            <Card.Img variant="top" src={mantenimiento} style={{ width: '100', height: '150px', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title>Mantención</Card.Title>
              <Card.Text>
                Servicios preventivos y correctivos para preservar la vida útil de los equipos, segurando el óptimo funcionamiento y eficiencia del sistema a lo largo del tiempo.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );

}







export default Servicios;

