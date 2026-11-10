// NO son atajos de teclado xd
let obj = {}; // Esto es un atajo para crear un objeto
let obj2 = new Object;
/**
 * Se pueden crear:
 * New Array(); []
 * new String(); "" '' 
 * new Number(); 123
 * new Boolean(); true / false
 */
// ¿Qué constructor tendrá un objeto que creemos con una función constructora?
function Usuario() {
    this.name = "Chanchito";
}

let user = new Usuario();
console.log(Usuario);
// El typeof de un constructor de variable, será object
// Los string, number y boolean constructores se comportan diferente a los literales

const s1 = "1 + 1";
const s2 = new String("1 + 1");
console.log(eval(s1), eval(s2)); // s2 = String('1 + 1')
// Sempre usa los strings literales
console.log(s2.valueOf); // Ver el valor de una variable constructora como una literal