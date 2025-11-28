import React from 'react';
import Container from 'react-bootstrap/Container';

import Card from 'react-bootstrap/Card';
import kitsolar from '../Images/kitsolar.jpg';
import kitEmpresa from '../Images/kitEmpresa.jpg';
import kitHibrido from '../Images/kitHibrido.jpg';

function Soluciones() {
    return (
        <div className='container mt-4' >
            <div >
                <div className="col-12 d-flex justify-content-between  p-1 mb-1"  >
                    <h4 className="fw-bold  mb-0">Soluciones</h4>
                    <p className="text-secondary fst-italic ms-3">
                        kits residenciales, PyME, off-grid con baterías e híbridos
                    </p>
                </div>
            </div>
            <div className='row' >
                <div className=' col-lg-4' >
                    <Card className="h-100" style={{ width: '100%' }}>
                        <Card.Img variant="top" src={kitsolar} style={{ width: '40%', height: '150px', objectFit: 'cover' }} />
                        <Card.Body>
                            <Card.Title>Hogar 3–5 kW</Card.Title>
                            <Card.Text>
                                Balance ideal entre costo y ahorro mensual
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className=' col-lg-4' >
                    <Card className="h-100" style={{ width: '100%' }}>
                        <Card.Img variant="top" src={kitEmpresa} style={{ width: '100', height: '150px', objectFit: 'cover' }} />
                        <Card.Body>
                            <Card.Title> Pyme 10–20 kW</Card.Title>
                            <Card.Text>
                                Para operación diurna con buena irradiación
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className=' col-lg-4'>
                    <Card className="h-100" style={{ width: '100%' }}>
                        <Card.Img variant="top" src={kitHibrido} style={{ width: '100', height: '150px', objectFit: 'cover' }} />
                        <Card.Body>
                            <Card.Title>Off-grid con baterías e híbridos</Card.Title>
                            <Card.Text>
                                Autonomias en zonas sin red Eléctrica
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

            </div>
        </div>
    );
}

export default Soluciones;