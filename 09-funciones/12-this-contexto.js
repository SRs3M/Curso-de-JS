const usuario = {
    nombre : "Nicolas",
    ciudadanias: ["Chile", "Colombia", "New Zealand"],
    mostrarCiudadanias() {
        this.ciudadanias.forEach(ciudadania => {
            // this. en una función hace referencia al objeto windows. Por eso no se podrá acceder a nombre, por eso se debe usar una fat arrow function (Ya que no tiene un contexto de this)
            console.log(this.nombre, ciudadania);
        }); // For each funciona como map, pero no retorna nada, por esto no se podrá caputar en una variable
    }
};
usuario.mostrarCiudadanias();