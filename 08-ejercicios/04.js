// Construir una función la cual devuelva la cantidad de usuarios !free y otra que devuelva la cantidad de usuarios mayores de 18
const usuarios = [
    {edad:17, nombre:"Nico", plan:"premium"},
    {edad:13, nombre:"Chanchito", plan:"premium"},
    {edad:32, nombre:"Fernanda", plan:"free"},
    {edad:25, nombre:"Felipe", plan:"gold"}
];

function getPremium(users) {    
    // return users.filter(u => u.plan === "premium").length;
    return users.reduce((acc, el) => el.plan !== "free" ? acc + 1 : acc, 0)
}

const cuantosPremium = (users) => {
    users.reduce((acc, el) => el.plan !== "free" ? acc + 1 : acc, 0)
}

function getMayores(users) {
    return users.filter(u => u.edad > 18).length;
}

console.log(getPremium(usuarios));
console.log(getMayores(usuarios))