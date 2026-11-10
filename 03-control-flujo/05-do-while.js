let i = 2;

// while (i < 10) { // si condicion se cumple
//     if (i % 2 == 0) {
//         console.log("Número par", i);
//     }
//     console.log(i); // ejecutar hasta que no se cumpla condición
//     i++;
// }

do { // primero se ejecuta el do
    if(i % 2 == 0){
        console.log("numero par", i);
    }
    i++
} while (i < 2); // y luego evalua el while