import { Component, OnInit } from '@angular/core';
import ServiceDepartamentos from '../../../services/service.departamentos';
import { Departamento } from '../../models/departamento';


@Component({
  selector: 'app-departamentos-component',
  standalone: false,
  templateUrl: './departamentos-component.component.html',
  styleUrl: './departamentos-component.component.css',
})
export class DepartamentosComponentComponent implements OnInit {
  public departamentos!:Array<Departamento>
  constructor(private _service: ServiceDepartamentos){}

    ngOnInit(): void {
      this._service.getDepartamentos().subscribe(response =>{
        this.departamentos = response
      })
    }
}
