let punto = {
    x: 10,
    y: 15,
};

// clonar un objeto dentro de otro objeto
let referencia = Object.assign(punto, { z:20, x: 1 });
let clonePunto = Object.assign({}, punto, { z:20, x: 1 }); // Assign permite asignar las propiedades que estan a la derecha a objetos de la izquierda. Toma los valores de mas a la derecha (Osea si le agregamos un objeto que ya existe, se reemplazaran)
// console.log(punto, clonePunto);
console.log(referencia);

// copiar algo perfectamente
let copiaPunto = Object.assign({}, punto);
console.log(copiaPunto, punto);

// Un metodo mas nuevo //
let copia3 = { ...punto } // Vamos a crear un objeto literal y luego las propieaddes de punto se le van a asignar a este objeto literal
console.log(copia3);

// forma antigua
let copia4 = {};
for(let llave in punto) {
    copia4[llave] = punto[llave];
}
console.log(copia4);