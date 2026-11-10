/**
 * crear algoritmo que tome un array pares
 * y devuelva un array de objetos
*/
let pares = [
    [1, { name: "Nicolas"}],
    [2, { name: "Felipe"}],
    [3, { name: "Chanchito"}],
];

let array = [{
    id: 1,
    name: "Nicolas",
}, {
    id: 2,
    name: "Felipe",
}, {
    id: 3,
    name: "Chanchito",
}];


function toCollection(arr) {
    let collection = [];
    i = 0;
    for(prop in arr){
        let elemento = arr[prop];
        collection[prop] = elemento[1];
        collection[prop].id = elemento[0];
    }
    return collection;
}


let resultado = toCollection(pares);
console.log(resultado);