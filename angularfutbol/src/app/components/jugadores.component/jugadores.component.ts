/*
  Componente: JugadoresComponent
  Descripción: Muestra una lista de jugadores solicitada desde el servicio `JugadoresService`.
  Comportamiento:
    - carga jugadores al inicializarse (ngOnInit)
    - maneja errores e informa en consola
*/
import { Component, OnInit } from '@angular/core';
import { JugadoresService } from '../../services/jugadores.service'; // importamos el servicio

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {

  jugadores: any[] = []; // array para almacenar los jugadores

  constructor(private jugadoresService: JugadoresService) { }

  ngOnInit(): void {
    this.cargarJugadores();
  }

  cargarJugadores(): void {
    this.jugadoresService.getJugadores().subscribe({
      next: (data) => {
        this.jugadores = data; // llenamos el array con la respuesta de la API
      },
      error: (err) => {
        console.error('Error al cargar los jugadores', err);
      }
    });
  }

}
