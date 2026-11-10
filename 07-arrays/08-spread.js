// combinar arrays pero de una forma mas facil de leer (esto es mas o menos nuevo)
let arr1 = [1, 2];
let arr2 = [5, 6];

let arr3 = [0, ...arr1, 3, 4, ...arr2, 7, 8]; // Toma todos los elementos dentro de un array si antes de invocar a este array ponemos "..." y los coloca en este array, y si quisieramos agregar mas elementos los ponemos normalmente
let arr4 = [...arr3];
arr3.pop(); // Este array es una copia, asi que arr4 quedará sin tocar
console.log(arr3, arr4);