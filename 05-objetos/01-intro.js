// Como todas estas variables se relacionan, se pueden poner en un objeto
let email = "nico@holamundo.io";
let name = "Nicolas";
let direccion = {
    calle: "Queen St",
    numero: 15,
}

// le podemos asignar variables y funciones
user = {
    email : "nico@holamundo.io",
    name : "nicolas",
    direccion: {
        calle: "Queen St",
        numero: 15,
    },
    activo: true,
    recuperarClave: function() { // Una función sin nombre se conoce como función anónima
        console.log("recuperando clave...");
    }
};

/** 
 * A este estilo de programación donde tomamos datos que se relacionan entre si se le conoce como POO
 * Programación
 * Orientada a
 * Objetos
 * 
 * o en inglés:
 * Object
 * Oriented
 * Programming
 */