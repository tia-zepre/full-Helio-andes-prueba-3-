import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

function DetallesServicio() {

    const { id } = useParams();        // Obtener ID desde la URL
    const [servicio, setServicio] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        
        Axios.get("http://localhost:3001/api/servicios")
            .then((response) => {

                // Buscar el servicio por ID dentro del array
                const encontrado = response.data.find(s => s.id === Number(id));

                setServicio(encontrado);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });

    }, [id]);

    if (loading)
        return <h3 className="text-center mt-5">Cargando...</h3>;

    if (!servicio)
        return <h3 className="text-center mt-5">Servicio no encontrado</h3>;

    return (
        <div className="content-wrapper">

            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>{servicio.nombre}</h1>
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
                                    src={servicio.imagen}
                                    className="img-fluid rounded"
                                    alt={servicio.nombre}
                                />
                            </div>

                            <div className="col-md-6">
                                <h3><b>{servicio.nombre}</b></h3>
                                <p>{servicio.contenido}</p>

                                <div className="mt-4">
                                    <button className="btn btn-warning mr-2" onClick={() => alert(" Función disponible próximamente")}>Editar</button>
                                    <button className="btn btn-danger mr-2" onClick={() => alert(" Función disponible próximamente")}>Eliminar</button>
                                    <button className="btn btn-info" onClick={() => alert(" Función disponible próximamente")}>Cambiar Imagen</button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}

export default DetallesServicio;
