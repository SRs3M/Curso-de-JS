function suma(a, b /** un parametro */) {
    console.log(arguments); //todos los argumentos en un Array no recomendado
    return a + b;
}

let resultado = suma(5, 6, 1, 2, 3); // se pone el valor del parametro (argumento)
console.log(resultado);
console.log(typeof suma);