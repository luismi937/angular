/*
  Componente: HomeComponent
  Descripción: Componente de inicio que carga datos combinados (jugadores y equipos) usando forkJoin.
  Notas:
    - usa HttpClient para hacer peticiones a endpoints de ejemplo
    - establece `loading` mientras espera las respuestas
*/
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  jugadores: any[] = [];
  postfiles: any[] = [];
  loading = true;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // ngOnInit: inicializa la vista cuando el componente se crea.
    // Aquí se lanzan las peticiones concurrentes necesarias para
    // obtener datos iniciales (jugadores y equipos) mediante forkJoin.
    // Usamos forkJoin para esperar ambas respuestas y poblar la UI.
    const jugadoresRequest = this.http.get<any[]>('https://apiapuestas.azurewebsites.net/jugadores');
    const postfilesRequest = this.http.get<any[]>('https://apiapuestas.azurewebsites.net/equipos');

    forkJoin({
      jugadores: jugadoresRequest,
      postfiles: postfilesRequest
    }).subscribe({
      next: (results) => {
        this.jugadores = results.jugadores;
        this.postfiles = results.postfiles;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error cargando datos', err);
        this.loading = false;
      }
    });
  }
}
