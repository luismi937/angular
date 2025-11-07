import { Component } from '@angular/core';
import { Persona } from '../../../models/personas';
import { ServicePersona } from '../../services/service.persona';
import { OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-personasstandalone',
  standalone: true,
  templateUrl: './personasstandalone.component.html',
  styleUrl: './personasstandalone.component.css',
  providers: [ServicePersona],
  imports:[NgIf, NgFor]
})
export class PersonasstandaloneComponent implements OnInit {
  public personas !: Array<Persona>;
  constructor(private _service: ServicePersona){
    this.personas = new Array<Persona>();
  }
  ngOnInit(): void {
    this._service.getPersonasPromise().then(response =>{
      console.log("leyendo")
      this.personas = response;
    })
  }
}

