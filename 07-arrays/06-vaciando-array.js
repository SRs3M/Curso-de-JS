// - Bastante normal - //
// let arr = [1, 2];
// let arr = []; // Re-asignamos el array a no tener nada
// // - Problemas? - //
// let arr = [1, 2];
// let arr2 = arr;
// arr = [];
// console.log(arr2, arr); // El contenido de arr2 seguira siendo 1, 2

// - "manualmente" asignandole longitud 0 (esto es común) - //
// let arr = [1, 2];
// arr.length = 0; // Manipulamos la longitud a ser 0
// console.log(arr);

// - No es la mas bonita, pero es bien explicita en que hacemos - //
// let arr = [1, 2];
// arr.splice(0, arr.length); // Eliminar los objetos desde la posicion 0 hasta la longitud del array

// - utilizara los mas recursos de tu PC - //
// let arr = [1, 2]
// while(arr.length > 0) {
//     arr.pop();
// }