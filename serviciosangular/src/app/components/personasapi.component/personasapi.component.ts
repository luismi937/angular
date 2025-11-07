import { Component, OnInit } from '@angular/core';
import { ServicePersona } from '../../services/service.persona';
import { Persona } from '../../../models/personas';
@Component({
  selector: 'app-personasapi',
  standalone: false,
  templateUrl: './personasapi.component.html',
  styleUrl: './personasapi.component.css',
})
export class PersonasapiComponent implements OnInit {
  public personas !: Array<Persona>;
  constructor(private _service: ServicePersona){}
  ngOnInit(): void {
    this._service.getPersonasPromise().then(response =>{
      console.log("leyendo")
      this.personas = response;
    })
  }
}
