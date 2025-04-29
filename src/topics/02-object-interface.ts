import { Person } from './08-classes';

let habilidades: String []= ['nadar', 'correr', 'saltar'];

interface caracteriticas {
    nombre: String;
    persona:number;
    deporte: String;
    otros?: String;
}

const persona:caracteriticas = {
    nombre : 'Marisol',
    persona: 54,
    deporte: 'natacion',
}
persona.otros = 'caminar';

console.table(persona);






interface Person{
   name:string,
   apellido:string,
   edad:number,
   estadoCivil?:string
}

let caracteristicas:Person={
    name:'Viqui',
    apellido:'Alaro',
    edad:32
}

caracteristicas.estadoCivil='soltera';
console.table(caracteristicas);


interface Mascotas{
    raza:string,
    edad:number|string;
    vacunas?:string
}

let perro:Mascotas={
    raza:'mestizo',
    edad:'8 años',
}

console.table(perro);













export{};

