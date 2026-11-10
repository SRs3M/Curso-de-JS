// sin usar "..." ni "Object.assign" y tampoco ninguna función que venga en JS para hacer copias: una función que devuelva la copia de un objeto
let obj1 = {id:1, name: "chanchito"};
function crearCopia(obj) {
    copiaObjeto = {};
    for(let item in obj) {
        copiaObjeto[item] = obj[item];
    }
    return copiaObjeto;
}

let obj2 = crearCopia(obj1);
console.log(obj1, obj2)