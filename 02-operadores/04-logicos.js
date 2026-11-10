// Los operadores lógicos son AND, OR, NOT

// AND (&&)
let mayor = false;
let suscrito = true;
// console.log(true && true); // el AND revisa si TODOS los condicionales son verdaderos
// console.log(false && true); // Si un condicional es false con AND, se devuelve false
console.log("AND ", mayor && suscrito);

// OR (||)
console.log("OR ", mayor || suscrito); // el OR revisa si un solo condicional es verdadero. Aunque el resto sea false y uno sea true. Este devolvera true

// NOT (!)
console.log("NOT ", !mayor); // el NOT revisa si un condicional es falso. Si en este caso, el condicional es falso. Este devuelve true
let soloCatalogoInfantil = !mayor; // ej

