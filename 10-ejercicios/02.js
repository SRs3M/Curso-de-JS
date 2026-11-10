const obj = {
    nombre: "Nicolas",
}

function extend(usuario) {
    const methods = {
        login() {console.log(`logging ${usuario.nombre}`)},
        logout() {console.log(`logging out ${usuario.nombre}`)}
    }
    return Object.assign(usuario, methods);
}

const usuario = extend(obj);

console.log(usuario);
usuario.login();