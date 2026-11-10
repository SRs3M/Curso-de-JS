// break para el codigo
// continue se salta partes del codigo
// Aqui se muestra con while, se puede con for, for in, for of, do while

let i = 0;
while (i < 6) {
    i++;
    if (i === 2) {
        continue; // cuando lleguemos aqui, todo lo que este después de este se ignorara y luego empezara otra vez el loop
    }
    if(i === 4) {
        break; // para.
    }
    console.log(i);
}