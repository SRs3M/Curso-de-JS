// privado significa que no podra ser usado desde afuera
function Usuario() {
    this.name = "Nicolas";
    let id = 1;

    let log = function() { // simplemente no ponga this. y asi no se podra acceder desde el exterior
        console.log("logging");
    }
    
    this.guardar = function() {
        log();
        console.log("guardando");
    }
}

const usuario = new Usuario();
usuario.log = function() {
    console.log("lala");
}
usuario.guardar();