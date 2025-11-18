/*
  Modelo: Jugador
  Descripción: Clase que representa un jugador de fútbol.
  Campos:
    - idJugador: identificador del jugador
    - nombre: nombre completo
    - posicion: posición en el campo (por ejemplo: delantero, defensa)
    - imagen: URL o ruta de la imagen del jugador
    - fechaNacimiento: fecha de nacimiento en formato cadena
    - pais: país de origen
    - idEquipo: identificador del equipo al que pertenece

  Uso: se utiliza para tipar objetos de tipo jugador en componentes y servicios.
*/
export class Jugador {
  constructor(
    public idJugador: number,
    public nombre: string,
    public posicion: string,
    public imagen: string,
    public fechaNacimiento: string,
    public pais: string,
    public idEquipo: number
  ) {}
}
