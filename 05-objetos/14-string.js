const saludo = "Hola Mundo!";
//              0123456
const despedida = new String("Chao Mundo :(");
console.log(typeof saludo, typeof despedida); // String, Object

console.log(saludo.length); // Devuelve el largo del String
console.log(saludo.indexOf("Mu")); // Devuelve el índice de donde se encuentra en el otro string
console.log(saludo.indexOf("aeou")); // -1 devolverá si no está en el string
console.log(saludo.includes(" Mundo")) // Devuelve true o false
console.log(saludo.replace("Mundo", "Nicolas"), saludo) // Parte a ser reemplazada, Con qúe se reemplazara
let nuevoSaludo = saludo.replace("Mundo", "Nicolas"); // Para guardarse, debe ser asi
console.log(saludo.toLowerCase()); // Todo a minusculas
console.log(saludo.toUpperCase()); // Todo a mayusculas
console.log(saludo.substring(0, 4)); // Índice de inicio, índice final pero el índice final no incluye el caracter final. Sirve para recortar
console.log(saludo.substr(2, 4)); // Deprecado

const espacios = "    Hola     Mundo!   ";
console.log(espacios.trim()); // Recorta los espacios de un String
console.log(espacios.trimEnd()); // Recorta todos los espacios a la derecha
console.log(espacios.trimStart()); // Recorta todos los espacios a la izquierda