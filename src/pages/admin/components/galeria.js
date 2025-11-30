import React, { useState } from "react";

// Función para importar imágenes desde cualquier carpeta en src
function importarImagenes(r, carpeta) {
  return r.keys().map((item) => ({
    src: r(item),
    path: item,
    origen: carpeta
  }));
}

function Galeria() {
  // Imágenes desde src/Assest/Images
  const imagenesSrc = importarImagenes(
    require.context("../../../Assest/Images", false, /\.(png|jpe?g|svg)$/),
    "src/Assest/Images"
  );

  // Imágenes desde src/Assets/PublicImages (moverlas a src para funcionar automáticamente)
  const imagenesPublic = importarImagenes(
    require.context("../../../../public/dist/img", false, /\.(png|jpe?g|svg)$/),
    "public/dist/img"
  );

  // Combinar ambas listas
  const todasImagenes = [...imagenesSrc, ...imagenesPublic];

  // --------------------- PAGINACIÓN ---------------------
  const [paginaActual, setPaginaActual] = useState(1);
  const imagenesPorPagina = 4;
  const totalPaginas = Math.ceil(todasImagenes.length / imagenesPorPagina);

  const indiceInicio = (paginaActual - 1) * imagenesPorPagina;
  const indiceFin = indiceInicio + imagenesPorPagina;
  const imagenesVisibles = todasImagenes.slice(indiceInicio, indiceFin);

  return (
    <div className="content-wrapper">

      <section className="content-header">
        <h2 className="text-center mt-3">Galería de Imágenes</h2>
      </section>

      <section className="content">
        <div className="container-fluid">
          <div className="row">

            {/* Mostrar imágenes de la página actual */}
            {imagenesVisibles.map((img, index) => (
              <div key={index} className="col-md-3 col-sm-6 mb-4">
                <div className="card p-2">
                  <img
                    src={img.src}
                    alt={`Imagen ${index}`}
                    className="img-fluid rounded mb-2"
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover"
                    }}
                  />
                  <small className="text-muted" style={{ fontSize: "0.75rem" }}>
                    {img.origen}/{img.path.replace("./", "")}
                  </small>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* ---------------------- Paginación ---------------------- */}
        <div className="d-flex justify-content-center mt-4">
          <ul className="pagination">
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
        </div>

      </section>
    </div>
  );
}

export default Galeria;

