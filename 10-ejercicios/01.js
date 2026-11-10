const obj = {
    nombre : "Nicolas",
    
}

function Extender () {
    this.login = () => {
        console.log(`Logeando usuario ${this.nombre}`);
    },
    this.logout = () => {
        console.log(`Cerrando sesión ${this.nombre}`);
    }
}

Extender.call(obj);
console.log(obj);
obj.login();
obj.logout();