// cuando se define una variable, JS cogera un bloque de memoria y le asignara ese valor de la variable. Pero si creamos un objeto, No se guarda el objeto sino que se guarda la dirección de donde se encuentra el objeto. Asi que aunque tengamos dos objetos totalmente iguales, si hacemos la triple igualdad (a = {}, b = {}, a === b) nos retornara falso, ya que tienen diferentes direcciónes. Pero si queremos que asigne true, deberemos asignar (a = {}, b = a) lo cual definira la misma dirección

let a = 1;
let b = a;
b++;
console.log(a, b); // 1, 2

let x = {};
let y = x;
b.prop = 1;
console.log(x, y); // {}, {}

let n = 1;
function suma(n) { // Cuando creamos un parametro, JS crea una variable especial para ese parametro. Por eso este n es diferente a la variable de n
    n++;
}

suma(n);
console.log(n); // 1

let j = { prop: 1 }
function addition(i) {
    i.prop++;
}

addition(j);
console.log(j); // {prop:2}
