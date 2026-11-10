// Crear una funcion que evalua si un objeto tiene una funcion en particular y si la propiedad contiene el valor de false, devolera true
let objeto = {
    id: 1,
    name: false,
    login: function(){},
    logout: function(){},
};

let propiedad = "name"

function tieneProp(obj, propiedad) {
    // let props = Object.keys(obj);
    // for(let prop of props) {
    //     if(propiedad == prop) {
    //         return true;
    //     }
    // }
    // return false;
    if(propiedad in obj){
        return true;
    }
    return false;
}
console.log(tieneProp(objeto, propiedad));