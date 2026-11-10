const letras = ["a", "b"];
// letras = "a"; // No se puede hace que el array deje de ser un array

// agregar elementos al final de un array
letras.push("c", "d");
// agregar elementos al inicio de un array
letras.unshift("y", "z");
// agregar elementos en la mitad de la nada
letras.splice(3, 0, 1, 2); // Indice donde se empezará, Elementos a eliminar, elementos que queremos agregar

console.log(letras);