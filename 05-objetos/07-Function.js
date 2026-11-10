function Punto(x, y) {
    this.x = x;
    this.y = y;
    this.dibujar = function() { console.log("Dibujando"); }
}

let punto = { z: 7};
// Punto.call(punto, 1, 2); // El contexto de this, los argumentos (tmb nuevos argumentos);
Punto.apply(punto, [1, 2]) // El contexto de this, [los argumentos]
console.log(punto);

// - No lo use - //
// const Point = new Function("x", "y", `
//     this.x = x;
//     this.y = y;
//     this.dibujar = function() { console.log("Dibujando"); }
// `);

// const p = new Point(1, 2);
// console.log(p);