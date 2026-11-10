// Una mejor forma para poner caracteres especiales en strings
const saludo  ="Hola Mundo! \nbienv\"en\'idos\t a ult\\imate javascript :)"; // Se ve muy feo

// Empleamos backticks para un template string (Tambien podemos poner variables en ellos)
const nombre = "Pepe"
const apellido = "Roberto"
const nombreCompleto = nombre + " " + apellido
// Podemos llamar variables, funciones, expresiones matemáticas y se pueden hacer funciones
function plantilla(nombre) {
    return `Hola ${nombreCompleto}!
Bienvenidos a "Ultimate Javascript ${1+1}"

Cariños ${nombre}`;
}
console.log(plantilla("Pepelin"))