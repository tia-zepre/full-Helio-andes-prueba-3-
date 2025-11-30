import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function ListaTestimonios() {

    const [testimonios, setTestimonios] = useState([]);
    const [paginaActual, setPaginaActual] = useState(1);

    const testimoniosPorPagina = 3; // testimonios por página

    useEffect(() => {
        Axios.get("http://localhost:3001/api/testimonios")
            .then(response => setTestimonios(response.data))
            .catch(error => console.log(error));
    }, []);

    // Total de páginas
    const totalPaginas = Math.ceil(testimonios.length / testimoniosPorPagina);

    const indiceInicio = (paginaActual - 1) * testimoniosPorPagina;
    const indiceFin = indiceInicio + testimoniosPorPagina;

    const testimoniosVisibles = testimonios.slice(indiceInicio, indiceFin);

    return (
        <div className="content-wrapper">

            <section className="content-header">
                <div className="container-fluid">

                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Testimonios</h1>
                        </div>

                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="/admin">Panel de control</a></li>
                                <li className="breadcrumb-item active">Testimonios</li>
                            </ol>
                        </div>
                    </div>

                </div>
            </section>

            <section className="content">

                <div className="card card-solid">
                    <div className="card-body pb-0">
                        <div className="row">

                            {testimoniosVisibles.map(testimonio => (
                                <div key={testimonio.id} className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">

                                    <div className="card bg-light d-flex flex-fill">

                                        {/* Nombre del cliente */}
                                        <div className="card-header text-muted border-bottom-0">
                                            <b>Comentario: {testimonio.id} </b> 
                                        </div>

                                        {/* Contenido del testimonio */}
                                        <div className="card-body pt-0">
                                            <div className="row">

                                                <div className="col-7">
                                                    <h2 className="lead"><b>{testimonio.nombre}</b></h2>


                                                    <p className="text-muted text-sm">
                                                        <b>Testimonio: </b> {testimonio.contenido}
                                                    </p>
                                                </div>

                                                {/* Imagen */}
                                                <div className="col-5 text-center">
                                                    <img
                                                        src={testimonio.imagen}
                                                        alt={testimonio.nombre}
                                                        className="img-fluid"
                                                        style={{
                                                            borderRadius: "10px",
                                                            maxHeight: "120px",
                                                            objectFit: "cover"
                                                        }}
                                                    />
                                                </div>

                                            </div>
                                        </div>

                                        {/* Botón ver detalle */}
                                        <div className="card-footer">
                                            <div className="text-right">
                                                <a
                                                    href={`/testimonios/${testimonio.id}`}
                                                    className="btn btn-sm btn-primary"
                                                >
                                                    <i className="fas fa-eye" /> Ver detalles
                                                </a>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            ))}

                        </div>
                    </div>

                
                    <div className="card-footer">
                        <nav aria-label="Testimonios Page Navigation">
                            <ul className="pagination justify-content-center m-0">
                                {[...Array(totalPaginas)].map((_, index) => (
                                    <li
                                        key={index}
                                        className={`page-item ${paginaActual === index + 1 ? "active" : ""}`}
                                    >
                                        <button
                                            className="page-link"
                                            onClick={() => setPaginaActual(index + 1)}
                                        >
                                            {index + 1}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                </div>

            </section>

        </div>
    );
}

export default ListaTestimonios;
