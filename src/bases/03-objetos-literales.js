

const persona = {
    nombre: 'tony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad: 'new York',
        zip: 5532121,
        lat: 14.3232,
        lng: 34.923321
    }
};

console.log( persona );

const persona2 = {...persona};
persona2.nombre = 'peter'; 

console.log(persona2);