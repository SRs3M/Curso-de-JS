// se usa para decirle al codigo, decir donde se vaya dependiendo del valor de una variable
// usa if-else o switch como quieras. Aunque existen librerias que le gustan usar swich como Redux



let accion = 'listar'
// la variable que vamos a evaluar
switch (accion) {
    // donde caiga en el caso de que ...
    case 'listar':
        console.log('Acción de listar');
        break; // poner break al final de todo o si no se ejecutara el resto
    case 'guardar':
        console.log('Acción de guardar');
        break;
    default: // opcional, se ejecuta cuando ningun case a la que la variable pueda responder
        console.log('Acción no reconocida');
}
