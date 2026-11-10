// Ctrl + D permite tener 2 cursores
// Evaluar si un array cuenta con todos los elementos cumpliendo con la característica o por lo menos alguno cumpliendo con ella
let usuarios = [
    {id:1, activo:true},
    {id:2, activo:true}, 
    {id:3, activo:true},
];

// every evaluará si **todos** cumplen una característica en un array
// recibe un predicate (una función que devuelve true o true)
let todosActivos = usuarios.every(u => { // every se ejecuta hasta que encuentre un valor de retorno falso y si lo encuentra dejara de ejecutarse
    console.log("todos activos", u.id);
    return u.activo;
});
console.log(todosActivos);

let algunoActivo = usuarios.some(u => { // sum se ejecuta hasta que devolamos true, cuando encuentre un return de true, dejara de ejecutarse
    console.log(u.id);
    return u.activo;
});
console.log(algunoActivo);