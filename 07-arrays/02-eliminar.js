const letras = ["a", "b", "c", "d"];
// Quitar elementos al final de un array
const final = letras.pop(); // Sacar el ultimo elemento de un array & permite asignar este elemento a una variable
console.log(final);
console.log(letras);
// Quitar elementos al inicio de un array
const comienzo = letras.shift(); // Sacar el primer elemento de un array & permite asignar ese elemento a una variable
console.log(comienzo);
console.log(letras);
// Eliminar elementos entre un array
letras.splice(1, 1); // Indice donde comenzará, elementos a eliminar
console.log(letras);