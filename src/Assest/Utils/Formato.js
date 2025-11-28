/**
 * Convierte un valor a número. Si no es un número válido, devuelve 0.
 * @param {*} val - El valor a convertir.
 * @returns {number}
 */
export const num = (val) => Number(val) || 0;

/**
 * Formatea un número como moneda CLP (Peso Chileno) sin decimales.
 * @param {number} val - El número a formatear.
 * @returns {string}
 */
export const CLP = (val) => {
    return new Intl.NumberFormat('es-CL').format(Math.round(val));
};

