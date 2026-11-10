// En JS los objetos son dinámicos, es decir, que les podemos agregar o quitar propiedades a nuestro antojo y cambiar su valor en cualquier momento

// Como esto es una constante, no podremos cambiar su valor, ¿O no?
const user = { id:1 }; // Si un objeto tiene pocas propiedades, esta bien colocarlo en una sola línea
// const user = 1; // Esto no se puede hacer ya que estamos cambiandole el valor.. Pero si podemos agregarle propiedades
user.name = "nicolas"; 
user.guardar = function() {
    console.log("guardando", user.name);
}

user.guardar();

delete user.name; //Eliminar propiedades
delete user.guardar;
console.log(user)

// SI queremos que no se pueda modificar
const user1 = Object.freeze({ id:1 }); // No le podremos cambiar ni sus propiedade ni sus valores
user1.name = "nico";
user1.id = 2;
console.log(user1);
const user2 = Object.seal({ id:1 }); // No le podremos cambiar sus valores pero si podemos agregar propiedades
user2.name = "nico";
user2.id = 2;
console.log(user2);