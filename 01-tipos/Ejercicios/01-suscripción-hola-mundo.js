/**En este primer ejercicio vamos a definir variables, realizaremos una carta de identificación en la que colocaremos datos de un usuario, pero tendremos que definir ya sea con { let } o con { const } dependiendo de que si el dato puede modificarse o no.Los datos que definiremos son: nombre, apellido, fecha de nacimiento, dirección, edad, país de nacimiento, y si tiene una suscripción activa en la Academia Hola Mundo.Al final, deberás imprimir estos todos estos datos de manera que podamos leerlos en la consola. */

console.log("---CARTA DE IDENTIFICACIÓN---")

const nombre = "Pepe";
const apellido = "Suarez";
const fechaNacimiento = "67 de joeviembre de 2067";
let dirección = "Calle de los braintogns 123";
let edad = -3;
const nacidoEn = "Colombia";
let estadoSuscripción = true;

console.log("Nombre: " + nombre);
console.log("Apellido: " + apellido);
console.log("Fecha de Nacimiento: " + fechaNacimiento);
console.log("Dirección: " + dirección);
console.log("Edad: " + edad);
console.log("País de Nacimiento: " + nacidoEn);
console.log("Suscripción: " + estadoSuscripción);
