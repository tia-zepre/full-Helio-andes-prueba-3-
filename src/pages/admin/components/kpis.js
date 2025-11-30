import React from 'react';
import { useEffect, useState } from 'react';

function Kpis() {

    const [servicios, setServicios] = useState([]);
    const [soluciones, setSoluciones] = useState([]);
    const [planes, setPlanes] = useState([]);
    const [testimonios, setTestimonios] = useState([]);

    useEffect(() => {

        fetch("http://localhost:3001/api/servicios")
            .then(res => res.json())
            .then(data => setServicios(data))
            .catch(err => console.error("Error cargando servicios:", err));

        fetch("http://localhost:3001/api/soluciones")
            .then(res => res.json())
            .then(data => setSoluciones(data))
            .catch(err => console.error("Error cargando soluciones:", err));

        fetch("http://localhost:3001/api/planes")
            .then(res => res.json())
            .then(data => setPlanes(data))
            .catch(err => console.error("Error cargando planes:", err));

        fetch("http://localhost:3001/api/testimonios")
            .then(res => res.json())
            .then(data => setTestimonios(data))
            .catch(err => console.error("Error cargando testimonios:", err));

    }, []);

    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">Dashboard</h1>
                        </div>{/* /.col */}
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="/admin">Panel de control</a></li>
                                <li className="breadcrumb-item ">Dashboard</li>
                            </ol>
                        </div>{/* /.col */}
                    </div>{/* /.row */}
                </div>{/* /.container-fluid */}
            </div>
            {/* /.content-header */}
            {/* Main content */}
            <section className="content">
                <div className="container-fluid">
                    {/* Small boxes (Stat box) */}
                    <div className="row">
                        <div className="col-lg-3 col-6">
                            {/* small box */}
                            <div className="small-box bg-success">
                                <div className="inner">
                                    <h3>{soluciones.length}</h3>
                                    <p>Soluciones</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-bag" />
                                </div>
                                <a href="/adminSoluciones" className="small-box-footer">Más información <i className="fas fa-arrow-circle-right" /></a>
                            </div>
                        </div>
                        {/* ./col */}
                        <div className="col-lg-3 col-6">
                            {/* small box */}
                            <div className="small-box bg-primary">
                                <div className="inner">
                                    <h3>{planes.length}</h3>
                                    <p>Planes</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-stats-bars" />
                                </div>
                                <a href="/adminPlanes" className="small-box-footer">Más información <i className="fas fa-arrow-circle-right" /></a>
                            </div>
                        </div>
                        {/* ./col */}
                        <div className="col-lg-3 col-6">
                            {/* small box */}
                            <div className="small-box bg-danger">
                                <div className="inner">
                                    <h3>{servicios.length}</h3>
                                    <p>Servicios Registrados</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-pie-graph" />
                                </div>
                                <a href="/adminServicios" className="small-box-footer">Más información <i className="fas fa-arrow-circle-right" /></a>
                            </div>
                        </div>
                        
                        {/* ./col */}
                        <div className="col-lg-3 col-6">
                            {/* small box */}
                            <div className="small-box bg-dark">
                                <div className="inner">
                                    <h3>{testimonios.length}</h3>
                                    <p>Testimonios / comentarios</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-person-add" />
                                </div>
                                <a href="/adminTestimonio" className="small-box-footer">Más información <i className="fas fa-arrow-circle-right" /></a>
                            </div>
                        </div>
                        {/* ./col */}
                    </div>
                    {/* /.row */}
                </div>{/* /.container-fluid */}
            </section>
            {/* /.content */}
        </div>

    );
}

export default Kpis;