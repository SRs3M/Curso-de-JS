// Construir una función que permite determinar cuales propiedades de un objeto son métodos (funciones en un objeto)
let objeto = {
    id: 1,
    name: "chanchito",
    login: function(){},
    logout: function(){},
};

function cualesMetodos(obj) {
    for(let prop in obj){
        if(typeof obj[prop] === "function") {
            console.log(prop);
        }
    }
}
cualesMetodos(objeto)