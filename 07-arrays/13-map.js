// Crear nuevos arrays a partir de un array ya existente
const usuarios = [
    {edad:17, nombre: "Nico"},
    {edad:13, nombre: "Chanchito"},
    {edad:25, nombre: "Felipe"},
    {edad:32, nombre: "Fernanda"},  
];
// Ej: crear un array con los nombres envueltos en la etiquesta HTML de <li> (lista no ordenada) 
const lista = usuarios.map(usuario => `<li>${usuario.nombre}</li>`) // Recibe una función la cual recibe el elemento que estamos iterando, el indice y el array mismo que esta iterando (solo usaremos el usuario en este)
// El valor que retorne esta función, sera asignado al nuevo array
console.log(lista);
// Un ejemplo del uso de join
const html = `<ol>${lista.join("")}</ol>`;
console.log(html);

// Ej: agregar un elemento de mayor si un usuario tiene mas de 18 años
const mapped = usuarios.map(usuario => ({ // Técnicamente es una línea, asi que sobra los parentesis de llave después de la declaración de los parámetros
    ...usuario, // Una copia de usuario
    mayor: usuario.edad > 17, // un nuevo elemento de mayor
}));
console.log(mapped);

/** Map devuelve un array nuevo, lo que signifca que podemos encadenar métodos como filter y map
 *  El otro método que usaremos se pone después de el elemento que vamos a iterar (en este caso usuarios)
 *  Ej: crear un nuevo array el cual devolvera los nombres de los mayores de edad envueltos en la etiqueta HTML de <li>
 */

const listaMayores = usuarios
    .filter(u => u.edad > 17)
    .map(u => `<li>${u.nombre}</li>`);

const htmlMayores = `<ol>${listaMayores.join("")}</ol>`;

console.log(htmlMayores);