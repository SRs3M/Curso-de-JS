console.log(
    Math.PI, // 3,1415...
    Math.abs(-15), // El valor absoluto (15)
    Math.round(15.5), // Redondear numeros (16)
    Math.round(15.4), // (14)
    Math.floor(15.9), // Redondea hacia abajo (15)
    Math.ceil(15.01), // Redondea hacia arriba (16)
    Math.pow(2, 3), // Potencia (Base, exponente)
    Math.sqrt(9), // Raiz cuadrada
);

console.log(Math.random()); // Numero pseudoaleatorio entre 0 - 1
// Random entre mas rangos
function getRandom(min, max) {
    return Math.random() * (max - min);
}
console.log(getRandom(10, 1));