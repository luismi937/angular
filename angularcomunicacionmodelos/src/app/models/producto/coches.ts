/*
  Modelo: Coche (angularcomunicacionmodelos)
  - Representa un coche con marca, modelo, velocidad, aceleración y estado.
*/
export class Coche{
    constructor(
        public marca: string,
        public modelo: string,
        public velocidad: number,
        public aceleracion: number,
        public estado: boolean
    ){
        
    }
}