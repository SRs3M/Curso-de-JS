const usuarios = [
    {id:1, name: "Chanchito"},
    {id:1, name:"Felipe"},
    {id:2, name: "Feliz"},
]

// -1, ya que la ruta es diferente a la de este objeto. No se podrá hacer asi
const resultado = usuarios.indexOf({id:1, name:"Chanchito"});
console.log(resultado);
// Una funcion que tiene que le tienen que pasar una funcion como argumento, se conocen como predicate (funcion que devuelve true o false)
const ans = usuarios.find(function(usuario) { // find recibirá la funcion la cual recibe un parametro el cual es un elemento del array que estamos iterando
    return usuario.id === 1; // Como hay dos id iguales, Si quiero que me retorne el de Felipe, solo me retornará el de chanchtio ya que es el primero que encontró, por eso se debe asegurar que el objeto que vamos a buscar sea único
})
console.log(ans);
// Una forma mas simple de escribirlo con arrow functions
const respuesta = usuarios.find(usuario =>
    usuario.name === "Chanchito"
);
console.log(respuesta);
// Si por alguna razon necesitamos el índice de lo que buscamos y no el objeto en si usamos findIndex
const index = usuarios.findIndex(usuario =>
    usuario.name === "Chanchito"
);
console.log(index);
