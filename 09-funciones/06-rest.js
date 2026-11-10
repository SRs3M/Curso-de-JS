function suma(a, b, ...rest /* Args, Argumentos, Resto. Este parametro siempre debe ser el último */) {
    console.log(rest);
}
suma(1, 2, 3, 4, 5, 6);

const fatSuma = (a, b, ...rest) => console.log(rest);
fatSuma(1, 2, 3, 4, 5, 6)

// Casos de verdad //
// Imprimir casos de error
const logMsg = (desc, ...msgs) => {
    for (let msg of msgs) {
        console.log(desc, msg);
    }
}
// logMsg("Servidor:", "Error1", "Petición Aceptada", "Socket activo");
let mensajes = ["Error1", "Petición Aceptada", "Socket activo"];
logMsg("Cliente móvil:", ...mensajes, "Otros errores");