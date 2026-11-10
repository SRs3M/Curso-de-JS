// console.log(saludo); // Function saludo ()
// console.log(vieja); // undefined
// console.log(hola); // Cant access hola before initialization
// console.log(chao); // " " chao " "
function saludo () {} // JS toma la función completa y lo pone al inicio del archivo (Hecho por el motor de JS)
var vieja = "Ya no debes usar esto"; // Las lleva al comienzo pero con el valor undefined. No use eso xfa
let hola = "Hola"; // Todas las variables en JS tienen hosting. Tomará estas dos variables al inicio PERO
const chao = "Chao"; // al intentar accederlas, lanzará mensaje de error (solo let & const)
// Utilizado antes de ecmascript

console.log(window); // Al declarar variables o funciones con function o var, el nombre que tiene siempre estará en windows. Esto no pasará con let || const

// Al declarar variables, use let y const. NO use var y tenga cuidado al declararlas con function