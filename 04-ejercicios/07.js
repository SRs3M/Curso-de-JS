/**
 * Crear algoritmo que devuelva
 * el precio de un producto
 * más el IVA
 */

function precioCompleto(precio, impuesto) {
    impuesto *= precio;
    return precio + impuesto;
}

let resultado = precioCompleto(19.90, 0.15);
console.log(resultado);
