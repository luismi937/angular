import { Component, OnInit } from '@angular/core';

import ServiceDepartamentos from '../../../services/service.departamentos';

import { Departamento } from '../../models/departamento';

@Component({
  selector: 'app-departamentos',

  standalone: false,

  templateUrl: './departamentos-component.html',

  styleUrl: './departamentos-component.css',
})
export class DepartamentosComponent implements OnInit {
  public departamentos!: Array<Departamento>;

  constructor(private _service: ServiceDepartamentos) {}

  loadDepartamentos(): void {
    this._service.getDepartamentos().subscribe((response: any) => {
      this.departamentos = response;
    });
  }

  ngOnInit(): void {
    this.loadDepartamentos();
  }

  deleteDepartamento(id: number): void {
    this._service.deleteDepartamento(id).subscribe((response: any) => {
      console.log('delete');

      this.loadDepartamentos();
    });
  }
}
