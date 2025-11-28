import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import persona1 from '../Images/persona1.jpg';
import persona2 from '../Images/persona2.jpg';
import persona3 from '../Images/persona3.jpg';

function Testimonios() {
  return (
    <div className='container mt-4' >
        <div >
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand className="boldText" href="#">Testimonios</Navbar.Brand>
                    <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>Clientes ya confian en HelioAndes</Navbar.Text>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        <div className='row' >
            <div className=' col-lg-4' >
                <Card  className="h-100" style={{ width: '100%'}}>
                    <Card.Img variant="top" src={persona1} className=" py-1 h-50 w-50 d-block mx-auto"/>
                    <Card.Body>
                        <Card.Title>Michell, Pereira</Card.Title>
                        <Card.Text>
                        "Desde que instalamos el plan Hogar, 
                        nuestra cuenta de luz se redujo a la mitad.
                         Es una solución simple y efectiva para ahorrar
                          y ser más amigables con el medio ambiente."
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className=' col-lg-4' >
                <Card  className="h-100"  style={{ width:  '100%'}}>
                   <Card.Img variant="top" src={persona2} className=" py-1 h-50 w-50 d-block mx-auto"/>
                    <Card.Body>
                        <Card.Title> juan, Carrasco</Card.Title>
                        <Card.Text>
                        "El costo energético era un problema 
                        para nuestra PyME. Con el sistema de 
                        15 kW de HelioAndes, bajamos drásticamente
                         los gastos fijos y proyectamos una pronta
                          amortización. ¡Excelente inversión!"
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>  
            <div className=' col-lg-4'>
                <Card className="h-100"  style={{ width:  '100%'}}>
                    <Card.Img variant="top" src={persona3} className=" py-1 h-50 w-50 d-block mx-auto"/>
                    <Card.Body>
                        <Card.Title>isabell, Jimenez</Card.Title>
                        <Card.Text>
                        Vivimos en una zona rural y necesitábamos
                         total autonomía. Nuestro sistema Off-grid
                          es confiable; ya no dependemos de la red
                           ni sufrimos cortes. La batería
                            nos da paz mental todas las noches."
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>  
            
        </div>
    </div>
  );
}

export default Testimonios;