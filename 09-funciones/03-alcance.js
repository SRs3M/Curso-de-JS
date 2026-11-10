let afuera = "estoy afuera XD";

function alcance() {
    // console.log(saludo); 
    // console.log(vieja);
    // console.log(variable);
    // console.log(constante);
    function saludo() {} // Estas 4 variables pertenecen solamente a la función
    var vieja = "ya no usar"; // Todas irán al inicio de la función
    let variable = "Hola Mudno";
    const constante = "Hola munudono";
    console.log(saludo); // Si se ejecutará, ya que está al alcanze de la función
    console.log(vieja);
    console.log(variable);
    console.log(constante);
    console.log(afuera); // Sirve
    afuera = "Estoy dentro xD";
}
// console.log(saludo); Lanzará error, ya que está fuera del alcanze de la función. Asi que estas variables están "indefinidas"
// console.log(vieja);
// console.log(variable);
// console.log(constante);

console.log(afuera);
alcance();
console.log(afuera);