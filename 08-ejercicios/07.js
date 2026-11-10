const usuarios = [
    {edad:17, nombre:"Nico",      plan:"premium"},
    {edad:13, nombre:"Chanchito", plan:"free"},
    {edad:25, nombre:"Felipe",    plan:"gold"},
    {edad:32, nombre:"Fernanda",  plan:"free"},
];

function groupBy(arr, prop) { // recibe un array, propiedad con la que queremos agrupar (ej: por plan)
    return arr.reduce((acc, el) => {
        let key = el[prop];
        acc[key] = acc[key] ? acc[key] : [];
        acc[key].push(el);
        return acc;
    }, {});
}

const grouped = groupBy(usuarios, "plan");
console.log({ grouped });