function sumaTodo(arr) { // Importante que sea un objeto!
    if (!Array.isArray(arr)) {
        throw new Error("El parámetro entregado no es un Array");
    }; // Si es un array
    return arr.reduce((acc, el) => {
        if(typeof el !== "number" || Number.isNaN(el)) { // Si el elemento es NaN
            throw new Error(`Elemento "${el}" no es un número`);
        }
        return acc + el
    });
}
try { // 1. Intentar esto
    console.log(sumaTodo([1, 2, 3, 4])); // Error
} catch(error) { // 2. De resto, hacer esto
    console.error(error.message);
}
console.log("Post try-catch"); // 3. Y seguir con el resto

// Error: Un objeto (Cuando creas una instancia de error)
// Excepción: Cuando es lanzada con throw