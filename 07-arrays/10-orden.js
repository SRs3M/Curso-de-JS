// Volver a ordenar Arrays
let numeros = [15, 10, -3];
numeros.sort(); // Menor a Mayor (-3, 10, 15)
numeros.reverse(); // revierte el orden del array
console.log(numeros);

let letras = ["z", "a", "d"];
letras.sort(); // a, d, z
console.log(letras);

// problema
let conMayusculas = ["Z", "a", "d"];
// conMayusculas.sort(); 
// esto nos retornará Z, a, d
// Esto pasa porque los caracteres se le asgina un numero el cual se usa en los lenguajes de operación o los mismos SO para ser referenciados, por la ASCII(American Standard Code for Information Interchange) la letra Z se le asigna el 90, pero la a tiene el 97. Asi que Z < a, por eso sort nos devuelve la Z primero, Y si queremos desde orden alfabetico y no por números, tendremos que usar otro metodo de sort
conMayusculas.sort((a, b) => { // Normalmente se pasa por parametro a y b
    // a antes de b => -1
    // b antes de a => 1
    // si son iguales => 0
    let alower = a.toLowerCase(); // no importa si lo ponemos en UpperCase, lo que importa es que todos esten o en mayuscula o en minuscula
    let blower = b.toLowerCase();

    if(alower < blower) {
        return -1; // b antes de a (a, b)
    } // no es necesario poner un else, porque si el if de arriba es verdadero, hace un return y se corta la función que estamos haciendo
    if(alower > blower) {
        return 1;
    }
    return 0; // Seria como un else {return 0;}
});
console.log(conMayusculas); // a, d, Z

// con objetos
let usuarios = [
    {edad: 15, nombre: "Felipe"},
    {edad: 25, nombre: "Nicolas"},
    {edad: 13, nombre: "Poli"},
];

usuarios.sort((a, b) => {
    if(a.edad < b.edad) return -1; // a antes de b
    if(a.edad > b.edad) return 1; // b antes de a
    return 0; // iguales
});
console.log(usuarios);