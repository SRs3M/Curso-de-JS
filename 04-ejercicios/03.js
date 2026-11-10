/**
 * indice validar que no sea menor a cero y que el elemento exista en el array
 */
function getbyIdx(Array, idx) {
    if(idx < 0 || Array.length <= idx) {
        return "El indice es invalido";
    }
    
    return Array[idx];
}

let resultado = getbyIdx([1, 2], 3);
console.log(resultado);
