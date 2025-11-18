/*
  Modelo: Comic (angularcomunicacionmodelos)
  - Representa un cómic con título, imagen y descripción.
*/
export class Comic{
    constructor(
        public titulo: string,
        public imagen: string,
        public descripcion: string
    ){}
}