let numero = 42;
let nombre = "Hola mundo";
let verdadero = true;
let undef;
let nula = null;
// nombre = 53; // sin let o const antes para cambiar de valor
console.log(typeof numero); // typeof pregunta el tipo de var
console.log(typeof nombre);
console.log(typeof verdadero);
console.log(typeof undef);
console.log(typeof nula);
/* Type de Null solo es null. Si poner typeof devuelve object
En la primera implementacion de JS, Sus valores estaban representados. El tipo de tag para objetos era 0, null era representado como el NULL pointer (0x00 en plataformas), Normalmente null tenia 0 como tag y por eso null devuelve object. */