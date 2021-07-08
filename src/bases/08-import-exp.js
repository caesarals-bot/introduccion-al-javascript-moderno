import Heroes, {owners}  from "../bases/data/heroes";

//import { heroes } from './bases/data/heroes';

//console.log(owners);

export const getHeroeById = (id) => Heroes.find( (heroe) => heroe.id === id? true:false);


//console.log( getHeroeById(2));

export const getHeroeByOwner = ( owner ) => Heroes.filter( (heroe) => heroe.owner === owner? true:false);

//console.log( getHeroeByOwner('DC') );