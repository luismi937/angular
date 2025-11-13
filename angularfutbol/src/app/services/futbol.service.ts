import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs';
import { environment } from '../../environments/environments';
import { Jugador } from '../models/jugador';
import { Equipo } from '../models/equipo';
import { DatosEquipo } from '../models/datosequipo';

@Injectable({
  providedIn: 'root'
})
export class FutbolService {
  constructor(private _http: HttpClient) {}

  getJugadoresEquipo(idEquipo: number): Observable<Jugador[]> {
    return this._http.get<Jugador[]>(`${environment.urlApiFutbol}api/jugadores/jugadoresequipos/${idEquipo}`);
  }

  findEquipo(idEquipo: number): Observable<Equipo> {
    return this._http.get<Equipo>(`${environment.urlApiFutbol}api/equipos/${idEquipo}`);
  }

  getEquipos(): Observable<Equipo[]> {
    return this._http.get<Equipo[]>(`${environment.urlApiFutbol}api/equipos`);
  }

  getDatosEquipo(idEquipo: number): Observable<DatosEquipo> {
    return forkJoin({
      equipo: this.findEquipo(idEquipo),
      jugadores: this.getJugadoresEquipo(idEquipo)
    }).pipe(
      map(result => {
        const datos = new DatosEquipo();
        datos.equipo = result.equipo;
        datos.jugadores = result.jugadores;
        return datos;
      })
    );
  }

  buscarJugadoresPorLetra(letra: string): Observable<Jugador[]> {
    return this._http.get<Jugador[]>(`${environment.urlApiFutbol}api/jugadores/buscar/letra/${letra}`);
  }

  buscarJugadorPorNombre(nombre: string): Observable<Jugador[]> {
    return this._http.get<Jugador[]>(`${environment.urlApiFutbol}api/jugadores/buscar/nombre/${nombre}`);
  }
}
