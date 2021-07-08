//Funciones en js
const saludar = function  ( nombre ) {
    return `Hola, ${nombre}`
}

const saludar2 = ( nombre ) => {
    return `Hola, ${nombre}`
}

const saludar3 = (nombre) => `hola, ${nombre}`;

const saludar4 = () => `Hola Mundo`;


console.log(saludar('Profesor'));
console.log(saludar2('Goku'));
console.log(saludar3('vegueta'));
console.log(saludar4());


const getUser = () => ({
    uid: 'ABC123',
    username: 'El_Papi1502'
});

const user = getUser();
console.log( user );

//Tarea
//1. Transformen a una funcion de flecha
//2. Tiene que retornar un objeto implicito
//3. .Pruebas 
function getUsuarioActivo(nombre) {
    return {
        uid:'ABC567',
        username: nombre
    }
}
const getUsuarioActivo2 = (nombre) =>
    ({
        uid:'ABC567',
        username: nombre
    })


const usuarioActivo = getUsuarioActivo('Fernando');
console.log( usuarioActivo );

const usuarioActivo2 = getUsuarioActivo2('Londoño');
console.log( usuarioActivo2 );