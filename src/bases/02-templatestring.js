

const nombre = 'Fernando';
const apellido = 'Herrera';


//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `
${ nombre } 
${ apellido}
`;

console.log(nombreCompleto);

function getSaludo( nombre ) {
    return 'hola mundo ' + nombre;
}

console.log(` Este es un un texto: ${ getSaludo(nombre)}`)

