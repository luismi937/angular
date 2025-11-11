import { Component, OnInit } from '@angular/core'; 

import { ElementRef, ViewChild } from '@angular/core'; 

import { Plantilla } from '../../../models/plantilla'; 

import { ServicePlantilla } from '../../services/service.plantilla'; 

@Component({ 

 selector: 'app-plantilla', 

 standalone: false, 

 templateUrl: './plantilla-simple-component.html', 

 styleUrl: './plantilla-simple-component.css', 

}) 

export class PlantillaSimpleComponent implements OnInit { 

 public funciones!: Array<string>; 

 @ViewChild("selectfuncion") selectFuncion!: ElementRef; 

 public plantillas: Array<Plantilla>; 

 constructor(private _service: ServicePlantilla){ 

  this.plantillas = new Array<Plantilla>(); 

 } 

 mostrarPlantilla(): void { 

  let funcion = this.selectFuncion.nativeElement.value; 

  this._service.getPlantillaFuncion(funcion).then(response => { 

   this.plantillas = response; 

  }) 

 } 

 ngOnInit(): void { 

   this._service.getFunciones().subscribe(response => { 

    this.funciones = response; 

   }) 

 } 

} 