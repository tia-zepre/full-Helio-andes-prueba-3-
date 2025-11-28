import React from 'react';
import Container from 'react-bootstrap/Container';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import kitsolar from '../Images/kitsolar.jpg';
import kitEmpresa from '../Images/kitEmpresa.jpg';
import kitHibrido from '../Images/kitHibrido.jpg';

function Planes() {
    return (
        <div className='container mt-2' >
            <div >
                <div className="col-12 d-flex justify-content-between  p-1 mb-1"  >
                    <h4 className="fw-bold  mb-0">Planes</h4>
                    <p className="text-secondary fst-italic ms-3">
                        Elige el plan que se ajusta a tu proyecto.
                    </p>
                </div>
                
            </div>
            <div className='row' >
                <div className=' col-lg-4' >
                    <Card  className="h-100"  style={{ width: '100%' }}>
                        <Card.Img variant="top" src={kitsolar}  className="w-50  d-block mx-auto"   />
                        <Card.Body>
                            <Card.Title>3–5 kW</Card.Title>
                            <Card.Text >
                                Sistemas fotovoltaicos de energía solar diseñadas
                                para el consumo eléctrico de una vivienda
                                estándar, permitiendo un ahorro significativo
                                en la factura eléctrica.
                            </Card.Text>
                            <Button variant="success" href='https://www.cambioenergetico.com' style={{ width: '100%' }}>Solicitar Evaluación</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className=' col-lg-4' >
                    <Card   className="h-100"  style={{ width: '100%' }}>
                        <Card.Img variant="top" src={kitEmpresa} className="w-50 d-block mx-auto"  />
                        <Card.Body>
                            <Card.Title>Pyme 10–20 kW</Card.Title>
                            <Card.Text>
                                Sistemas fotovoltaicos con mayor capacidad,
                                ideales para pequeñas y medianas empresas que
                                buscan reducir costos operativos y mejorar
                                su sostenibilidad.
                            </Card.Text>
                            <Button variant="success" href='https://www.cambioenergetico.com' style={{ width: '100%' }}>Solicitar Evaluación</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className=' col-lg-4'>
                    <Card   className="h-100"  style={{ width: '100%' }}>
                        <Card.Img variant="top" src={kitHibrido} className="w-50 d-block mx-auto" />
                        <Card.Body>
                            <Card.Title>Híbrido + Baterías</Card.Title>
                            <Card.Text >
                                Sistemas conectados a la red que utilizan
                                baterías para almacenar excedentes y proveer
                                energía durante cortes de luz o cuando la producción
                                solar es baja, maximizando el autoconsumo y el respaldo.
                            </Card.Text>
                            <Button variant="success" href='https://www.cambioenergetico.com' style={{ width: '100%' }}>Solicitar Evaluación</Button>
                        </Card.Body>
                    </Card>
                </div>

            </div>
        </div>
    );
}

export default Planes;