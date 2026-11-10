// - Take me back back home - // 
// Dentro de un objeto: This hace referencia al objeto
const user = {
    name:  "Nicolas",
    login() { // Método: función dentro de un objeto
        console.log(this);
    }
}

user.logout = function () {
    console.log(this);
}

user.login();
user.logout();

// En una función: this hace referencia al objeto window, global
function log() {
    console.log(this);
}

log();

// Con new: hace referencia al objeto que será creado
function Log(msg) {
    this.msg = msg;
    console.log(this);
}
/** NEW
 * se crea un objeto literal
 * se vincula este objeto a this
 * se vincula el prototipo
 * si no retorna nada, entonces retorna this.
 */
const l = new Log("Hola Mundo");