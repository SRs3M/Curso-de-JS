/**
 * crear un array de longitud n, y que sus elementos sean 
 * numeros desde el 1 hasta n
 */

let longitud = 7;

function crearArray(n) {
    let arr = [];
    if(n <= 0){
        return "oe no se vale :(";
    } else {
        for(i = 0; i < n; i++){
            arr[i] = 1 + i;
        }
    }
    return arr;
}

let resultado = crearArray(longitud);
console.log(resultado);