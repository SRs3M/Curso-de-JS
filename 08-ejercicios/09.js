// Cambiar la estructura de alguno de los dos arrays para que sea igual a la otra
/**
 * Unificar la estructura de usuarios y user
 * Fusionar los array
 * Ordenar por edad
 * Crear plantilla HTML:
 * <li>Nombre: name, Edad: age</li>
 * Imprimir la lista en consola
 */

const usuarios = [
    { edad: 17, nombre: "Nico", plan: "premium" },
    { edad: 13, nombre: "Chanchito", plan: "free" },
    { edad: 32, nombre: "Fernanda", plan: "free" },
];

const users = [
    { age: 22, name: "Michael", membership: "premium" },
    { age: 27, name: "Kevin", membership: "free" },
    { age: 29, name: "Happy pig", membership: "free" },
];

function unifyDBs() {
    // Unificar la estructura de usuarios y user
    for(usuario of usuarios) {
        Object.assign(usuario,
            {"age" : usuario.edad},
            {"name" : usuario.nombre},
            {"membership" : usuario.plan}
        )
        delete usuario.edad;
        delete usuario.nombre;
        delete usuario.plan;
    }

    // Fusionar los array
    for(usuario of usuarios) {
        users.push(usuario);
    }

    // Ordenar por edad
    users.sort((a, b) => {
        if(a.age < b.age) {
            return -1;
        }
        if(a.age > b.age) {
            return 1;
        }
        return 0;
    })

    // Crear plantilla HTML
    let HTML = users.map(user => {
        return `<li>Nombre: ${user.name}, Edad: ${user.age}</li>`
    });
    HTML.join("");

    HTML = `
    <ul>
        ${HTML.join(`
        `)}
    </ul>
    `
    ''
    console.log(HTML);
}
unifyDBs();
