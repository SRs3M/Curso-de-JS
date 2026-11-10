// Array o arreglo viene de la palabra collection

let animales = ["chanchito", "caballo"] // Array literal. Se puede dejar vacio o poner valores de inmediatos. Respeta el orden no como los objetos

console.log(animales);
console.log(animales[0]); // acceder al elemento n
animales[2] = "Dragón"; // agregar a un arreglo
console.log(animales);

animales[10] = "Pez"; // no hacer, deja espacios vacios
console.log(animales[7]); // devuelve undefined si se returna un espacio vacio
console.log(typeof animales); // Los arrays son objects
console.log(animales.length);