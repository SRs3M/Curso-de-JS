let arr1 = [1, 2];
let arr2 = [3, 4];

// Combinar arrays //
let combinados = arr1.concat(arr2); // Concat no cambia el valor del array, asi que toca poner este valor en otra varialbe
console.log(combinados, arr1, arr2);
// Dividir los arrays //
let divididos = combinados.slice(1, 3); // indice desde que se empezara a eliminar objetos, indice donde se terminará este proceso
console.log(combinados, divididos);

let tragados = combinados.slice(1); // Podemos saltar el primer valor para que tome el resto de valores
console.log(combinados, tragados);

let masomenosDivididos = combinados.slice(); // Hará una copia de el array, (si modificamos el array original, también modificaremos este)
console.log(combinados, masomenosDivididos);