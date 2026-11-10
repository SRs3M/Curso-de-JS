const letras = ["a", "b", 1, "c", "d", 1];

console.log(letras.indexOf("c")); // Devoler el indice de un elemento específico, Si no existe, devuelve -1
console.log(letras.indexOf(1)); // Nos devuelve el primer elemento que encuentra (si es q hay muchos del mismo)
console.log(letras.lastIndexOf(1)); // Inicia la busqueda de final al comienzo (osea devuelve el último valor solicitado)
console.log(letras.indexOf(1) !== -1); // Para revisar si un elemento existia o no se hacia esto
console.log(letras.includes("d")); // verificar si existe un valor en el array
console.log(letras.indexOf(1, 3)); // elemento a buscar, indice donde se iniciara la busqueda