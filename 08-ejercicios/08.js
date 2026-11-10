const usuarios = [
    {edad:25, nombre:"Felipe",    plan:"gold"},
    {edad:13, nombre:"Chanchito", plan:"free"},
    {edad:32, nombre:"Fernanda",  plan:"free"},
    {edad:17, nombre:"Nico",      plan:"premium"},
];

let returned = usuarios
    .filter(usuario => usuario.plan !== "free")
    .sort((a, b) => {
        if(a.edad < b.edad)
            return 1;
        if(a.edad > b.edad)
            return -1;
        return 0;
    })
    .map(elemento => `<li>${elemento.nombre}</li>`)

const HTML = `
<ul>
    ${returned.join(`
    `)}
</ul>
`

console.log(HTML);
/**
 * 1. Obtener usuarios pago (premium, gold)
 * 2. Ordenar de mayor a menor edad
 * 3. Devolver el nombre del usuario
 * 4. Crear una plantilla HTML
 * 5. Imprimirla por consola
 */
/**
 * <ul>
 *  <li>Felipe</li>
 *  <li>Nico</li>
 * </ul>
 */