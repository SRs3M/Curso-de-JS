// JS es un lenguaje dinamico, es decir que a los objetos se le pueden agregar o quitar propiedades con tan solo instruirselo. Esto puede presentar un problema si queremos acceder a una propiedad que se haya eliminado. Asi que asi se listan las propiedades de un objeto
const punto = {
    x: 10,
    y: 15,
    dibujar() { // dibujar : function() {}
        console.log("dibujando");
    }
}

// delete punto.dibujar;
if("dibujar" in punto){ 
    punto.dibujar();
} else {
    console.log("error404")
}

// console.log(Object.keys(punto)); // listar las propiedades de un objeto
for(let llave of Object.keys(punto)) {
    console.log(llave, punto[llave]);
}

for(let entry of Object.entries(punto)) {
    console.log(entry); // [propiedad : valor]
}

for(let llave in punto) {
    console.log(llave, punto[llave]);
}