export class Persona{
    //para realizar el binding automatico las propiedades deben llmarse como el json
    constructor(
         public IdPersona:number,
        public Nombre:string,
        public Email:string,
        public Edad:number
    ){}
}