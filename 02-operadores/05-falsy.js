// short-circuit

// ---TERMINAL CODE---
/*[] || {}
· []
{} && []
 · {}*/
 // devuelve el primer valor si todo es true. Devuelve el segundo valor de resto

// Falso. Lo devuelven los false, 0, "", null, undefined, NaN. Estos valores son conocidos como falsy
let nombre = "Chanchito feliz";
let username = nombre || "Annonymous";
console.log(username)