// Unir Arrays
let arr1 = ["Nicolas", "Chanchito", "Felipe"];
let mensaje = arr1.join(", "); // separador (opcional)
console.log(mensaje); // Nicolas, Chanchito, Felipe
// Separar Elementos
let saludo = "Hola Mundo! desde CO";
let dividio = saludo.split(" "); // Separador (obligatorio), detecta cada caracter y separa las palabras que esten entre ese caracter (Hola, Mundo!, desde, CO) ya que entre esas palabras hay un espacio " " el cual es el separador asignado
console.log(dividio);
// Crear una URL (pepito sanchez -> pepitosanchez)
// PASO 1: SEPARAR
let nickname = "Pepe Suarez";
let user = nickname.split(" ");
// user = ["Pepe", "Suarez"];
// PASO 2: UNIR
user = user.join(""); // Todo pegado
console.log(user);