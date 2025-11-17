/*
  Modelo compuesto: DatosEquipo
  Descripción: Contiene información del equipo y la lista de jugadores asociada.
  Propiedades:
    - equipo: información del equipo (tipo Equipo)
    - jugadores: lista de jugadores (Array<Jugador>)
*/
import { Equipo } from './equipo';
import { Jugador } from './jugador';

export class DatosEquipo {
  public equipo!: Equipo;
  public jugadores!: Array<Jugador>;
  constructor() {}
}
