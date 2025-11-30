import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

function DetallesSolucion() {

    const { id } = useParams();        // Obtener ID desde la URL
    const [solucion, setSolucion] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        Axios.get("http://localhost:3001/api/soluciones")
            .then((response) => {

                // Buscar la solución por ID dentro del array
                const encontrada = response.data.find(s => s.id === Number(id));

                setSolucion(encontrada);
                setLoading(false);

            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });

    }, [id]);

    if (loading)
        return <h3 className="text-center mt-5">Cargando...</h3>;

    if (!solucion)
        return <h3 className="text-center mt-5">Solución no encontrada</h3>;

    return (
        <div className="content-wrapper">

            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>{solucion.nombre}</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content">
                <div className="card card-solid">
                    <div className="card-body">

                        <div className="row">
                            <div className="col-md-6">
                                <img
                                    src={solucion.imagen}
                                    className="img-fluid rounded"
                                    alt={solucion.nombre}
                                    style={{ maxHeight: "300px", objectFit: "cover" }}
                                />
                            </div>

                            <div className="col-md-6">
                                <h3><b>{solucion.nombre}</b></h3>
                                <p>{solucion.contenido}</p>

                                <div className="mt-4">
                                    <button className="btn btn-warning mr-2" onClick={() => alert("Función disponible próximamente")}>Editar</button>
                                    <button className="btn btn-danger mr-2" onClick={() => alert("Función disponible próximamente")}>Eliminar</button>
                                    <button className="btn btn-info" onClick={() => alert("Función disponible próximamente")}>Cambiar Imagen</button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}

export default DetallesSolucion;
