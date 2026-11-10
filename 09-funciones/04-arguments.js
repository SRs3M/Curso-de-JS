function suma (a, b) {
    console.log(arguments);
    return a + b;
}

console.log(suma(1, 2));
console.log(suma(1)); // Intentará hacer 1 + undefined = NaN (Not a Number)
console.log(suma()); // undefined + unefined = NaN
console.log(suma(1, 2, 3, 4)); // 1 + 2 = 3, (El resto no hace nada)
    // Arguments será 1, 2, 3, 4

function sumaTodo(a, b) { // Muy 2015
    let total = 0;
    for(let valor of arguments) {
        total += valor;
    }
    return total;
}

console.log(sumaTodo(1, 2, 3, 4))

function sumaA(a, b) {
    return Array.from(arguments)
        .reduce((acc, el) => acc + el); // Toma los iterables y los transforma en array
}

console.log(sumaA(1, 2, 3, 4));