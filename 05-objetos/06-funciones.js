// Las funciones también son objetos, y se le consideran objetos de primera clase, osea, una función puede ser asignada a otras variables, pasadas como argumentos a otras funciones y ser retornadas de otras funciones
function Usuario(nombre) {
    this.nombre = nombre;
}

console.log(Usuario.name); // Nos retornara el nombre de la función
console.log(Usuario.length); // Nos retornara la cantidad de argumentos que recibe una función

const U = Usuario;
let user = new U("nicolas");

console.log(user);

function of(Fn, arg) {
    return new Fn(arg);
}

let user1 = of(Usuario, "Chanchito");
console.log(user1);

function returned() {
    return function() {
        console.log("Hola mudno");
    }
}

let saludo = returned();