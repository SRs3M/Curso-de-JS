// Personaje de TV
let nombre = "Luffy";
let anime = "One Piece";
let edad = "19";

let personaje = {
    nombre : "Luffy", // par llave-valor
    anime : "One Piece",
    edad : "17",
}; // objeto literal
console.log(personaje);
console.log(personaje.nombre); // visualizar una propiedad
console.log(personaje['anime']); // otra forma de visualizar una propiedad

personaje.edad = 19; // cambiar una propiedad 
personaje['edad'] = 16 // otra forma

delete personaje.anime // eliminar una propiedad

console.log(personaje);