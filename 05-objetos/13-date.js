const now = new Date(); // Cuando llamamos a Date y creamos a un nuevo objeto con "new", estamos creandolo con la fecha actual que tiene nuestra maquina actual
console.log(now);
// Crear una fecha en específico
const fecha = new Date("December 11 1986 14:15 GMT-0300"); // El string debe tener un formato de fecha EstadoUnidense (M/D/A/00:00/ZHR)
const fecha2 = new Date(1986, 11, 25, 14, 15); // año, mes (base 0), día, hora, minutos, seg, miliseg
// Cambiar el GMT sumando el GTM al GMT ya existente
console.log(fecha2);
const fecha3 = new Date(1986, 11, 25, 14+12, 15);
console.log(fecha3);
// Fechas internacionales
console.log("datestring", fecha3.toDateString()) // Fri Dec 26 2986
console.log("ISOString", fecha3.toISOString()) // Para mandar fechas desde el cliente al servidor, usa este
console.log("timestring", fecha3.toTimeString()) // 02:15:00 GMT-0500

fecha3.getDate(); // Obtener el día mes año
fecha3.getDay(); // Obtener el día de la semana
fecha3.getFullYear(); // El año completo
fecha3.getHours(); // La hora
fecha3.getMilliseconds(); // Los milisegundos
fecha3.getMinutes(); // Los minutos
fecha3.getMonth(); // El mes

fecha3.setFullYear(1978); // Cambiar un valor. el set tiene todos los tipos anteriores
console.log(fecha3);