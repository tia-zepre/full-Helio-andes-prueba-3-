import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

function DetallesTestimonio() {

    const { id } = useParams();        // Obtener ID desde la URL
    const [Testimonio, setTestimonio] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        Axios.get("http://localhost:3001/api/testimonios")
            .then((response) => {

                // Buscar la solución por ID dentro del array
                const encontrada = response.data.find(s => s.id === Number(id));

                setTestimonio(encontrada);
                setLoading(false);

            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });

    }, [id]);

    if (loading)
        return <h3 className="text-center mt-5">Cargando...</h3>;

    if (!Testimonio)
        return <h3 className="text-center mt-5">Solución no encontrada</h3>;

    return (
        <div className="content-wrapper">

            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>{Testimonio.nombre}</h1>
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
                                    src={Testimonio.imagen}
                                    className="img-fluid rounded"
                                    alt={Testimonio.nombre}
                                    style={{ maxHeight: "300px", objectFit: "cover" }}
                                />
                            </div>

                            <div className="col-md-6">
                                <h3><b>{Testimonio.nombre}</b></h3>
                                <p>{Testimonio.contenido}</p>

                                <div className="mt-4">
                                    <button className="btn btn-danger mr-2" onClick={() => alert("Función disponible próximamente")}>Eliminar</button>
                                    <button className="btn btn-info" onClick={() => alert("Función disponible próximamente")}>Agregar comentario beta</button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}

export default DetallesTestimonio;
