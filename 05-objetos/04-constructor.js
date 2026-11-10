// Crear un { id: 1, recuperarclave: function(){} };
function Usuario() { // El nombre que le daremos es del recurso que queremos crear en UpperCamelCase
    this.id = 1;
    this.recuperarClave = function() { // Método (Una función asignada a una propiedad de un objeto)
        console.log("Recuperando clave...");
    }
}

let usuario = new Usuario;
/** Para crear una variable utilizando el método (Usuario) debemos poner "new", la cual:
 * 1. Creara un objeto literal del aire {}
 * 2. Se vincula el prototipo de la función (En este caso usuario) con la función que se acaba de vincular
 * 3. Este objeto vacio se le asigna a "this." ( Por ende, this = {} )
 * 4. Si esta función de Usuario no retorna nada, retornará de manera automatica "this."
 */