import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function ListaPlanes() {

    const [planes, setPlanes] = useState([]);
    const [paginaActual, setPaginaActual] = useState(1);

    // Cantidad de planes por página
    const planesPorPagina = 3;

    useEffect(() => {
        Axios.get("http://localhost:3001/api/planes")
            .then(response => setPlanes(response.data))
            .catch(error => console.log(error));
    }, []);

    const totalPaginas = Math.ceil(planes.length / planesPorPagina);

    const indiceInicio = (paginaActual - 1) * planesPorPagina;
    const indiceFin = indiceInicio + planesPorPagina;
    const planesVisibles = planes.slice(indiceInicio, indiceFin);

    return (
        <div className="content-wrapper">


            <section className="content-header">
                <div className="container-fluid">

                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Planes</h1>
                        </div>


                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item">
                                    <a href="/admin">Panel de control</a>
                                </li>
                                <li className="breadcrumb-item active">Planes</li>
                            </ol>
                        </div>
                    </div>

                </div>
            </section>


            <section className="content">

                <div className="card card-solid">
                    <div className="card-body pb-0">
                        <div className="row">

                            {/* Listado dinámico de planes */}
                            {planesVisibles.map(plan => (
                                <div key={plan.id} className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">

                                    <div className="card bg-light d-flex flex-fill">


                                        <div className="card-header text-muted border-bottom-0">
                                            {plan.nombre}
                                        </div>

                                        <div className="card-body pt-0">

                                            <div className="row">


                                                <div className="col-7">

                                                    <p className="text-muted text-sm">
                                                        <b>Descripción: </b> {plan.contenido}
                                                    </p>

                                                    <p className="text-muted text-sm">
                                                        <b>Precio: </b> $Proximamente
                                                    </p>
                                                </div>


                                                <div className="col-5 text-center">
                                                    <img
                                                        src={plan.imagen}
                                                        alt={plan.nombre}
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

                                        {/* Botón */}
                                        <div className="card-footer">
                                            <div className="text-right">
                                                <a href={`/planes/${plan.id}`} className="btn btn-sm btn-primary">
                                                    <i className="fas fa-eye" /> Ver detalles
                                                </a>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            ))}

                        </div>
                    </div>

                    {/* ---------------------- Paginación ---------------------- */}
                    <div className="card-footer">
                        <nav aria-label="Planes Page Navigation">
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

export default ListaPlanes;
