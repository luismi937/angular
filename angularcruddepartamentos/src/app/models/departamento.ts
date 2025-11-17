/*
  Modelo: Departamento (angularcruddepartamentos)
  - Representa un departamento con número, nombre y localidad.
  - Usado por los componentes y servicios del módulo CRUD.
*/
export class Departamento{
    constructor(
        public numero: number,
        public nombre: string,
        public localidad: string
    ){}
}