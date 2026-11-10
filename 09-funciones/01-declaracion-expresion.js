// Declaración de funciones (Function declaration)
console.log(suma); // En cualquier lenguaje de programación, arrojaría un error llamar una función antes de declararla. Aqui no
console.log(resta); // Hoisting (Izar o levantar)
// Función nombrada (Named function)
function suma() {
    console.log("sumando..");
}
// Función anónima (Anonymous function)
// Solo cuando se ejecuta inmediatamente la función (Como en un map), de resto, JS se queja
// function () { 
//     console.log("función anónima");
// }

// Expresión de funciónes (Function expression)
let resta = function () { // Expresión de función anónima
    // Tomar una función y asignarselo a una variable (let o const)
    console.log("restando...");
}

let multiplica = function multi () { // Named function expression
    console.log("Multipicando");
}

// Fat arrow function
const divide = () => { // Fat arrow SI O SI debe ser anónima
    console.log("Dividiendo")
}