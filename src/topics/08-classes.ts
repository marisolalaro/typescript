export class Person{
    //public name: string;
   // private address: string;
    
    constructor( 
        public firtName: string,
        public lastLame: string,
        private address: string= 'No Address'
    ){ }

}
// es una clase qque se exteiende de otra que se extiende de otra 
// export class Hero extends Person {

//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string,
//     ){
//         super( realName,'New york');
//     }
// }

// const ironman = new Hero('Ironman',45,'Toni Start');
// console.log(ironman);

export class Hero  {
    
   // public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ){
   // this.person = new Person(realName);
    }
}

const tony = new Person('Toni ','Start','New york');
const ironman = new Hero('Ironman',45,'Toni Start', tony);
console.log(ironman);
