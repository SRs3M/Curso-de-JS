// function hola() {
//     return "Hola mundo";
// }

// Todas las fat arrow function son anonimas
const hola = mensaje => mensaje + " Hola Mundo"; // return implicito
const hola2 = (mensaje) => { // Son lo mismo
    return mensaje + " Hola Mundo";
}
const resultado = hola("xd");
console.log(resultado);