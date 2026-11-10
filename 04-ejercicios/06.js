// Crear un algoritmo que devuelva la cantidad de numeros positivos en un array

let array = [2, 5, 7, 15, -5, -100, 55];

function cuantosPositivos(arr){
    let positivos = [];
    i = 0;
    for(item of arr){
        if(item > 0){
           positivos[i] = item;
           i++
          }
    }
    return positivos;
}

let resultado = cuantosPositivos(array);
console.log(resultado);