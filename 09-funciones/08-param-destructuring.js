// Suponer que tenemos una función para configurar un servidor web recibiendo config
const config = {
    url : "https://holamundo.io",
    direccion: {
        calle: "hola mundo",
        numero: 80,
    },
}

function webserver(
    // {url, direccion : { calle }} // Del objeto pasado como argumento, sacar las propiedad url, dirección.calle
    {url, ...rest}, // También se vale fuera de la declaración de parámetros (Comm 2)
) {
    // const url = config.url;
    // const {url} = config; // De nuestro objeto de config, sacar la propiedad de url
    // console.log(calle);
    console.log(rest);
    return url;
}
console.log(webserver(config));

// con array //---------------------------------
const conf = [
    "https://holamundo.io",
    145,
    80,
];

function wwwserver([url, ...rest]) {
    // const [url, bucket, port] = configuration // Array destructuring
    console.log(rest);
    return url;
}

console.log(wwwserver(conf))