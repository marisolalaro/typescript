function addNumber(a:number, b:number): number{
return a+b;
}
//funciones de flecha 

const addNumberArraw = (a: number, b:number): string => {
return `${ a + b}`;
}
function multiplicacion (numero1: number, numero2?:number, base:number=2){
    return numero1*base;
    }

/*const result: number=addNumber(1,2);
const result1: string=addNumberArraw(1,2);
const resultados:number =multiplicacion(50);
console.log({result},result1, resultados);*/


//funciones con argumentos 
interface caracteristicas {
    name: string;
    hp:number;
    showHp: () => void;
}


const sanarCaracteristicas = (caracteristicas:caracteristicas, monto: number) =>{
    caracteristicas.hp += monto;

}

const iron:caracteristicas ={
    name: 'ironMan',
    hp: 50,
    showHp (){
        console.log(`puntos de vida ${this.hp} `);
    }

}
sanarCaracteristicas(iron, 10);

iron.showHp();


////nuevo
function sumarrr(a:number, b:number):number{
return a+b;
}
let resultado:number=sumarrr(5,5);
console.log(resultado);

function multiplicar(primerNum:number, secongNum?:number,base:number=2 ){
    return primerNum*base;
}
let resultadoMultiplicar:number=multiplicar(2);
console.log(resultadoMultiplicar)


function dividir(a:number, b:number):number{
    return a/b;
}
let resultadoDiv:number=dividir(10,2);
console.log({resultadoDiv});


console.log('newwwww');

interface Caracter{
name:string;
puntos:number;
showPuntos: ()=>void;
}

const sumarCaracter=(caracter:Caracter, monto:number)=>{
caracter.puntos +=monto;
}

let persona:Caracter={
name:'Marisol',
puntos: 10,
showPuntos() {
    console.log(`El punto NEW es ${this.puntos}`);
}
}

sumarCaracter(persona,50);
persona.showPuntos();



export{};