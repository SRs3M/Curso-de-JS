// construir una función que devuelva los |abs| de un array
function paraAbsoluto(arr) {
    return arr.map(num => Math.abs(num));
}

const ns = [-2, 3, 5, -15];

const absolutos = paraAbsoluto(ns);

console.log(absolutos);