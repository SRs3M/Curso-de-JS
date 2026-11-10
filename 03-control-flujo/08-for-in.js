// sirve para iterar las propiedades de un objeto, esto es nuevo
let user = {
    id: 1,
    name: 'Chanchito feliz',
    age: 25,
};

// 
for (let prop in user) {
    console.log(prop, user[prop]); // Mostrar el nombre del prop y su valor. Para poder mostrar el valor ponemos el array con los [en el cual va la variable del for o una prop especifica]
}

let animales = ['Chanchito feliz', 'Dragón', 'Canguro'];
for (let indice in animales) { // es mejor hacer esto
    console.log(indice, animales[indice]);
}