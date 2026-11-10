/**
 * {
 *  url:
 *  bucket: amazon S3(Donde almacenar los archivos de la app)
 *  port: 80
 * }
 */
// Parameter destructuring
const config = {
    url: "https://holamundo.io"
}
function configurarAPI(
    // Si url no es definido, tomará este valor
    // url = "https://holamundo.io"
    // { url } = { url:"https://default.df" }// De un objeto, sacar la propiedad der URL. Y si no está definido, tomará este valor
    url, bucket=145, port=80
) { 
    // const defaultURL = url || "https://holamundo.io"; // Antes
    return `${url}/${bucket}/${port}`;
}
// console.log(configurarAPI());
console.log(configurarAPI("holamundo.io", 80)); // Queremos tener el bucket por defecto (145), pero si lo dejamos así. JS pensará que el 80 es el bucket y port queda indefinido. Asi que debemos asignarle un valor por defecto a los valores a la derecha del objeto con un valor por defecto
console.log(configurarAPI("holamundo.io", undefined, 80)); // Se ve cochino we, mejor lo de arriba
console.log(configurarAPI("https://holamundo.io"));