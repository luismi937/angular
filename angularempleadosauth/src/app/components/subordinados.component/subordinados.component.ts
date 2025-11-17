/*
  Componente: SubordinadosComponent (angularempleadosauth)
  - Lista los empleados subordinados obtenidos mediante EmpleadosService.
  - Realiza la petición en ngOnInit y muestra resultado en la vista.
*/
import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../../services/empleados.service';

@Component({
  selector: 'app-subordinados',
  templateUrl: './subordinados.component.html',
  styleUrls: ['./subordinados.component.css'],
  standalone: false
})
export class SubordinadosComponent implements OnInit {
  subordinados: any[] = [];

  constructor(private empleadosService: EmpleadosService) {}

  ngOnInit(): void {
    this.empleadosService.getSubordinados().subscribe({
      next: (data) => this.subordinados = data,
      error: (err) => console.error('Error al obtener subordinados', err)
    });
  }
}
