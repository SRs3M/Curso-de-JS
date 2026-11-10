const numeros = [1, 2, 3, 4];
// Reducir el contenido de un array
// Ej: tomar varios numeros y sumarlos
const suma = numeros.reduce((acc, el) => {
    return acc + el;
    /**
     * acc = 0, el = 1 (return 1)
     * acc = 1, el = 2 (return 3 [futuro acc])
     * acc = 3, el = 3 (return 6)
     * acc = 6, el = 4 (return 10)
     */
}, 0); // recibe una función con dos parametors: un acumulador y el elemento que estamos iterando y también recibe el valor inicial del acumulador
console.log(suma); // 10
// Ej: aplanar un array que contiene mas arrays 
const anidado = [[1, 2], 3, [4, 5]];
// return esperado: [1, 2, 3, 4, 5]
const plano = anidado
    .reduce((acc, el) => 
        acc.concat(el)
    , []);
/**
 * acc = [], el = [1, 2] =concat=> [1, 2]
 * acc = [1, 2], el = 3  =concat=> [1, 2, 3]
 * acc = [1, 2, 3], el = [4, 5] =concat=> [1, 2, 3, 4, 5]
 */

console.log(plano);
// Ej: un array demasiado grande (miles de elementos) y estamos buscando algo en particular en vez de usar .find
const usuarios = [
    {edad:17, nombre: "Nico"},
    {edad:13, nombre: "Chanchito"},
    {edad:25, nombre: "Felipe"},
    {edad:32, nombre: "Fernanda"},
];

const indexado = usuarios.reduce((acc, el) => ({
    ...acc,
    [el.nombre]: el,
}), {});
console.log(indexado);