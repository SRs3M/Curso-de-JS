// Un loop que calcula los numeros pares

let i = 0;
// si condicion se cumple
while (i < 10) {
    if (i % 2 == 0) {
        console.log("Número par", i);
    }
    console.log(i); // ejecutar hasta que no se cumpla condición
    i++;
}

console.log("Fuera del while")