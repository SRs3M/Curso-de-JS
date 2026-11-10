const usuario = {
    nombre : "Chanchito",
    apellido : "Feliz",
    // Método: función dentro de un objeto
    get nombreCompleto() { // Getter
        return `${usuario.nombre} ${usuario.apellido}`;
    },
    set nombreCompleto(val) { // Setter recibe parametro si o si
        const [nombre, apellido] = val.split(" ");
        this.nombre = nombre;
        this. apellido = apellido; // this hace referencia a este objeto
    }
}
usuario.nombreCompleto = "Hola Mundo";
console.log(usuario.nombreCompleto);