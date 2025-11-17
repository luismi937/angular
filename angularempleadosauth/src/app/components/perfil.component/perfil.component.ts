/*
  Componente: PerfilComponent (angularempleadosauth)
  - Muestra el perfil del empleado obtenido desde el servicio EmpleadosService.
  - Se inicializa en ngOnInit y carga datos autenticados.
*/
import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../../services/empleados.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  standalone: false
})
export class PerfilComponent implements OnInit {
  empleado: any;

  constructor(private empleadosService: EmpleadosService) {}

  ngOnInit(): void {
    this.empleadosService.getPerfil().subscribe({
      next: (data) => this.empleado = data,
      error: (err) => console.error('Error al obtener perfil', err)
    });
  }
}
