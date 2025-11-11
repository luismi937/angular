import { Component, OnInit } from '@angular/core';
import { ServicePlantillas } from '../../services/service.plantilla';
import { Plantilla } from '../../../models/plantilla';

@Component({
  selector: 'app-plantillafuncionsimple',
  templateUrl: './plantillafuncionsimple.component.html',
  styleUrls: ['./plantillafuncionsimple.component.css']
})
export class PlantillafuncionsimpleComponent implements OnInit {
  funciones: string[] = [];
  seleccionFuncion: string = '';
  plantillas: Plantilla[] = [];

  constructor(private _service: ServicePlantillas) {}

  ngOnInit(): void {
    this.cargarFunciones();
  }

  cargarFunciones(): void {
    this._service.getFunciones().subscribe({
      next: (response) => this.funciones = response,
      error: (error) => console.error('Error al cargar funciones:', error)
    });
  }

  buscarPlantillas(): void {
    if (this.seleccionFuncion === '') return;

    this._service.getPlantillasPorFuncion(this.seleccionFuncion).subscribe({
      next: (response) => this.plantillas = response,
      error: (error) => console.error('Error al cargar plantillas:', error)
    });
  }
}
