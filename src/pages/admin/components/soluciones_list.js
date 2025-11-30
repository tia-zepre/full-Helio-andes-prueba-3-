import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function ListaSoluciones() {

    const [soluciones, setSoluciones] = useState([]);
    const [paginaActual, setPaginaActual] = useState(1);

    const solucionesPorPagina = 3; // servicios por página

    useEffect(() => {
        Axios.get("http://localhost:3001/api/soluciones")
            .then(response => setSoluciones(response.data))
            .catch(error => console.log(error));
    }, []);

    // Total de páginas
    const totalPaginas = Math.ceil(soluciones.length / solucionesPorPagina);

    // Soluciones visibles
    const indiceInicio = (paginaActual - 1) * solucionesPorPagina;
    const indiceFin = indiceInicio + solucionesPorPagina;
    const solucionesVisibles = soluciones.slice(indiceInicio, indiceFin);

    return (
        <div className="content-wrapper">

            {/* Header */}
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Soluciones</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="/admin">Panel de control</a></li>
                                <li className="breadcrumb-item active">Soluciones</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contenido */}
            <section className="content">
                <div className="card card-solid">
                    <div className="card-body pb-0">
                        <div className="row">

                            {solucionesVisibles.map(solucion => (
                                <div key={solucion.id} className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                                    <div className="card bg-light d-flex flex-fill">

                                        <div className="card-header text-muted border-bottom-0">
                                            {solucion.nombre}
                                        </div>

                                        <div className="card-body pt-0">
                                            <div className="row">
                                                <div className="col-7">
                                                    
                                                    <p className="text-muted text-sm">
                                                        <b>Descripción: </b> {solucion.contenido}
                                                    </p>
                                                </div>

                                                <div className="col-5 text-center">
                                                    <img
                                                        src={solucion.imagen}
                                                        alt={solucion.nombre}
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

                                        <div className="card-footer">
                                            <div className="text-right">
                                                <a
                                                    href={`/soluciones/${solucion.id}`}
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

                    {/* Paginación */}
                    <div className="card-footer">
                        <nav aria-label="Soluciones Page Navigation">
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

export default ListaSoluciones;
