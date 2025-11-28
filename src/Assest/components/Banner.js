
import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from '../Images/panel-solar.avif';



function Banner() {
    return (
        <div  className="container ">{/* esto es requerimiento*/}
            <div className='row' >
                <div className=' col-12 col-md-6' style={{ padding: '3rem' }}>
                    {/* esto es requerimiento ' col-12 col-md-6' tiene  un padding de 3 veces tamaño raiz*/ }
                    <span className="badge mb-1" /* badge etiqueta pequeña*/
                    style={{ backgroundColor: 'rgb(173, 216, 230)', 
                    color: 'rgb(0, 139, 139)' , 
                    borderRadius: '20px' }}>Energía solar</span>
                   
                    <h1> Energía solar accesible y confiable para tu hogar o pyme </h1>
                    <p > 
                        Dimensiona tu sistema, conoce el costo estimado y solicita asesoría en minutos La DEMO te guía con valores referenciales. </p>
                    <div className="d-flex gap-3 mt-3">{/* alinea los botones en una fila*/}

                    <Button variant="success" href="/demos">Ver DEMO</Button>
                    <Button variant="light" href="/catalogo-helioandes.pdf" style={{ border: '1px solid black' }}>Descargar catálogo</Button>
                    </div>
                </div>


                <div className=' col-12 col-md-6' style={{ padding: '3rem' }}>
                    {/* esto es requerimiento ' col-12 col-md-6'*/}
                    <img src={Image}  style={{width:'100%' , borderRadius: '10%'}} alt="panel solar"/>
                </div>
                
            
                
            </div>
        </div>
    );
}

export default Banner;