// Crear una función que reciba un array que devuelva el objeto con mayor edad
const usuarios = [
    {edad:17, nombre:"Nico", plan:"premium"},
    {edad:13, nombre:"Chanchito", plan:"free"},
    {edad:32, nombre:"Fernanda", plan:"free"},
    {edad:25, nombre:"Felipe", plan:"gold"}
];

function obtenerMayor(arr) {
    // return arr.reduce((acc, el) => {
    //     acc = el.edad > acc.edad ? el : acc;
    //     return acc;
    // }, )
    let mayor = arr[0];
    for(let usuario of arr) {
        mayor = mayor.edad < usuario.edad ? usuario : mayor;
    }
    return mayor;
}

const mayor = obtenerMayor(usuarios);
console.log(mayor);