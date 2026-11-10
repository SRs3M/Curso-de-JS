// Las factory nos permiten crear objetos de una manera sencilla y no repetitiva. Si queremos crear miles o millones de usuarios sin hacer lo mismo cada vez
// let user = {
//     id: 1,
//     email: "nico@holamundo.io",
//     name: "nicolas",
//     activo: true,
//     recuperarClave = function() {
//         console.log("recuperando clave...");
//     }
// };

function crearUsuario(name, email) { // Tiene que ser camelCase y generalmente empiezan con "create" o "crear"
    return {
        id: 1,
        email: email,
        name, // esto es exactamente igual que hacer name: name
        activo: true,
        recuperarClave: function() {
            console.log("recuperando clave...");
        },
    };
}

let user1 = new crearUsuario("Nicolas", "nico@holamundo.io");
let user2 = new crearUsuario("Felipe", "felipe@holamundo.io");

console.log(user1, user2);