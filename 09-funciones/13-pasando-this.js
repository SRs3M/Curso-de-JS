// Como cambiar el contexto the this o pasar otro objeto para que tome el contexto de this
function saludar(...rest) {
    console.log(this, rest);
}

saludar.call({ propiedad: "Hola Mundo" }, 1, 5); // Contexto de this, argumentos
saludar.apply({ propiedad : "Todos Los Lugares En El Final Del Tiempo" }, [1, 5]); // {contexto de this}, [argumentos]
saludar.bind({ propiedad : "Pedro" })(3, 5); // Permite cambiar el contexto de this. Esto es una nueva función, asi que toca pasarle los parámetros asi al lado (3, 5)

// Otra forma
(function despedir(...rest) {
    console.log(this, rest);
}).bind({ propiedad : "Chao Mundo"})(1, 2, 3, 4, 5);

// EJ (Archivo anterior)
const usuario = {
    nombre : "Nicolas",
    ciudadanias: ["Chile", "Colombia", "New Zealand"],
    mostrarCiudadanias() {
        let self = this; // Antiguo
        this.ciudadanias.forEach(function (ciudadania) { // Parametro final : this (sirve a veces)
            console.log(this.nombre, /*self.nombre*/  ciudadania);
        }.bind(this));
    }
};
usuario.mostrarCiudadanias();