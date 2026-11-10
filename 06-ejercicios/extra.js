function Estudiante(nombre, notas) {
    this.nombre = nombre;
    this.notas = notas;
    this.id = Math.random();
}


let Academia = [
    pepito = new Estudiante("Pepe Suarez de la Cruz", [10, 6, 0]),
    agnes = new Estudiante("Agnes Tachyon", [10, 10, 10, 0]), // El ulimo 0 es porque casi explota el salón
    dante = new Estudiante("Dante Burgos Castro", [6, 8, 6])
];

function evaluarAcademia(estudiantes) {
    let avg = 0;
    for(let estudiante of estudiantes){
        for(let attr in estudiante){
            if(attr === "notas"){
                let notas = estudiante[attr];
                for(let nota in notas){
                    avg += notas[nota];
                }
                avg /= notas.length
                let estado = avg >= 6 ? true : false;
                Object.assign(estudiante, {promedio:avg, gana:estado});
                avg = 0;
            }
        }
        console.log(`ID: ${estudiante.id} | Estudiante: ${estudiante.nombre} | Promedio: ${estudiante.promedio} | Estado(Gana o Pierde la Materia): ${estudiante.gana}`)
    }
}

let promedio = evaluarAcademia(Academia);
console.log(promedio);

let russianRoullete = Math.round(Math.random() * (2 - 0))
let elDeMalas = Academia[russianRoullete];
if("id" in elDeMalas){
    elDeMalas["nombre"] = "Expulsado";
} else {
    return "es hacker bro no non no es hacker";
    // PC.crash oziozi
}
console.log(elDeMalas);