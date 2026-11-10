/* while (x)
 do (x) while (y)
 for (x,x+y,x++) */

let animales = ['Chanchito feliz', 'Dragón', 'Perrito'];

// Como se llamaría cada objeto individual del array y luego el array
for (let animal of animales) {
    console.log(animal);
}

// otra forma de hacerlo en un while
let i = 0;
while (i < animales.length) {
    console.log(animales[i])
    i++;
}