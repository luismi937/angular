/*
  Modelo: Equipo
  Descripción: Clase que representa un equipo de fútbol.
  Campos principales:
    - idEquipo: identificador del equipo
    - nombre: nombre del equipo
    - imagen: URL o ruta de la imagen del equipo
    - champions: número de títulos Champions League
    - web: sitio web del equipo
    - descripcion: descripción breve
    - finalista: veces finalista

  Uso: tipado en servicios y componentes relacionados con equipos.
*/
export class Equipo {
  constructor(
    public idEquipo: number,
    public nombre: string,
    public imagen: string,
    public champions: number,
    public web: string,
    public descripcion: string,
    public finalista: number
  ) {}
}
