// Hacer un usuario con nombre y un ID random, pero con las Factory Function
function crearUsuario(name) {
    return {
        name,
        id : Math.random(),
    };
}

let user = crearUsuario("Felipe");
let user2 = crearUsuario("Chanchito");
console.log(user, user2);