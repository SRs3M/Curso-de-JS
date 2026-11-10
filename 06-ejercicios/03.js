// Construir una funcion que permite sabes si dos objetos son similares y se debe saber si tienen las mismas propiedades y si estas propiedades tienen los mismos valores
function similares(obj1, obj2) {
    // Asumir que los dos objetos son iguales en tamaño
    // let distintos = false;
    // for(let llave in obj1) {
    //     if(obj1[llave] !== obj2[llave]) {
    //         distintos = true;
    //     }     
    // }
    // return !distintos;
    
    // MI codigo revisa si tienen la misma longitud
    if(Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for(let prop in obj1) { // Compararemos obj1 con obj2
            if(obj1[prop] === obj2[prop]){
                // bien, siga
            } else {
                return false;
            }
        }
        return true;
}
let resultado = similares(
    { id: 1, name:"Nico"},
    { id: 1, name:"Nico"},
);

console.log(resultado)