/*
    Modelo: Producto (angularcomunicacionmodelos)
    - Representa un producto del catálogo con nombre, imagen y precio.
    - Usado por los componentes de lista y detalle en la aplicación.
*/
export class Producto{
constructor(
        public nombre: string,
        public imagen: string,
        public precio: number
){}}
}