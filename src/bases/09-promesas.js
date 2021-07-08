import { getHeroeById } from "../bases/data/heroes";



/*
const promesa = new Promise( (resolve, reject) => {
    setTimeout( () => {

        const heroe = getHeroeById(2);
        //console.log(heroe);
        resolv( heroe );
        //reject('No se pudo encontrar el heroe');
    }, 2000)
});

promesa.then( (heroe) => {
    console.log('heroe', heroe)
})
.catch( err => console.warn( err ) );
*/

const getHeroeByIdAsync = ( id ) => {

    return new Promise( (resolve, reject) => {
        setTimeout( () => {
    
            const heroe = getHeroeById(id);
            //console.log(heroe);
            !heroe?reject('No se pudo encontrar el heroe'):resolve( heroe );
            //resolve( heroe );
            //reject('No se pudo encontrar el heroe');
        }, 2000)
    });
    
    
}

getHeroeByIdAsync(2)
    .then( console.log )
    .catch(  console.warn );