// Crear una función que divida por el tipo de dato que contenga el array (Numeros, Strings, Objetos) y nos devuelva un array con cada objeto de cada categoria

const miArray = [
    "Hola",
    12,
    "Mundo",
    {},
    {id:15},
    ["lala"],
];

function dividePorTipo(arr) {
    return {
        numeros: arr.filter(n => typeof n === "number"),
        strings: arr.filter(n => typeof n === "string"),
        objetos: arr.filter(n => typeof n === "object")
    }
    // let numeros = [];
    // let strings = [];
    // let objetos = [];
    // arr.map(obj => {
    //     if(typeof obj === "number") {
    //         numeros.push(obj);
    //     } else if(typeof obj === "string") {
    //         strings.push(obj);
    //     } else {
    //         objetos.push(obj);
    //     }
    // })
    // return {numeros, strings, objetos}
}

const nuevoArray = dividePorTipo(miArray);
console.log(nuevoArray);