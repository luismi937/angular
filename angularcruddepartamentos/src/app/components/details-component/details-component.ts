/*
  Componente: DetailsComponent (angularcruddepartamentos)
  - Muestra los detalles de un departamento recibido por parámetros de ruta.
  - Construye un objeto Departamento para la vista a partir de los params.
*/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Departamento } from '../../models/departamento';

@Component({
  selector: 'app-details',
  standalone: false,
  templateUrl: './details-component.html',
  styleUrl: './details-component.css',
})
export class DetailsComponent implements OnInit {
  public departamento !: Departamento
  constructor(private _activeRoute: ActivatedRoute){}

  ngOnInit(): void {
    // ngOnInit: se suscribe a los parámetros de la ruta para construir
    // el objeto Departamento que se mostrará en la vista de detalles.
    // Este patrón es habitual cuando pasamos datos en la URL.
    this._activeRoute.params.subscribe((params: Params)=>{
      let id = parseInt(params["id"]);
      let nombre = params["nombre"];
      let localidad = params["localidad"];
      this.departamento = new Departamento(id, nombre, localidad);
    })
  }
}
