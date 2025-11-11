import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServicePlantillas } from '../../services/service.plantilla';
import { Plantilla } from '../../../models/plantilla';

@Component({
  selector: 'app-plantillafuncionsimple',
  standalone: false,
  templateUrl: './plantillafuncioncsimple.components.html',
  styleUrls: ['./plantillafuncioncsimple.components.css']
})
export class PlantillafuncionsimpleComponent implements OnInit {
  funciones: Array<any> = [];
  plantillas: Plantilla[] = [];

  @ViewChild('seleccionFuncion') seleccionFuncion!: ElementRef;

  constructor(private _service: ServicePlantillas) {}

  ngOnInit(): void {
    this.cargarFunciones();
  }

  cargarFunciones(): void {
    this._service.getFunciones().subscribe({
      next: (res: any) => {
        // Eliminar duplicados usando Set
        this.funciones = Array.from(new Set(res));
      },
      error: (err) => console.error('Error al cargar funciones:', err)
    });
  }

  buscarPlantillas(): void {
    const funcion = this.seleccionFuncion.nativeElement.value;
    if (!funcion) return;

    this._service.getPlantillasPorFuncion(funcion).subscribe({
      next: (response) => this.plantillas = response,
      error: (error) => console.error('Error al cargar plantillas:', error)
    });
  }
}
