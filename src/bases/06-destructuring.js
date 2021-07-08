

//Desestructuracion
//Asignacion desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
}

//const {nombre, edad, clave } = persona;

//console.log( nombre );
//console.log( edad );
//console.log( clave );

const useContext = ({clave,nombre, edad, rango = 'capitan'}) => {
    //console.log(nombre, edad, rango);

    return{
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat:14.2562,
            lng:-12.368
        }
    }
}

const {nombreClave, anios, latlng:{lat, lng}} = useContext(persona );

//const avenger = useContext ( {nombreClave, anios});

console.log(nombreClave, anios);

console.log(lat, lng);