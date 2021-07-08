
const personajes = ['Goku', 'Vegueta', 'trunks'];

const [ , , p3 ] = personajes;

console.log( p3 );

const retornaArreglo = () => {
 return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo();
console.log(letras, numeros);

const useState = (valor) => {
    return [valor, ()=>{ console.log('hola Mundo')}];
}

//Tarea
//1. el primer valor del arr se llamara nombre
//2. se llamara setNombre

const [nombre, setNombre] = useState('goku');

console.log( nombre );
setNombre();