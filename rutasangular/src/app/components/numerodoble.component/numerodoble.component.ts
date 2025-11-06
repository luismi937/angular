import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-numero-doble',

  standalone: false,
   templateUrl: './numerodoble.component.html',
   styleUrl: './numerodoble.component.css'
})
export class NumeroDobleComponent implements OnInit {
  public doble: number;

  public numero!: number;

  constructor(
    private _activeRoute: ActivatedRoute,
    private _router: Router
  ) {
    this.doble = 0;
  }
  redirect(num:number): void{
    this._router.navigate(["/numeroDoble", num])
  }
  goToHome(): void{
    this._router.navigate(['/'])
  }

  ngOnInit(): void {
    //AQUI ES DONDE NOS SUBSCRIBIMOS A LOS PARAMETROS

    this._activeRoute.params.subscribe((parametros: Params) => {
      //DENTRO DE Params ES DONDE RECIBIMOS LOS PARAMETROS POR SU :name

      //LA SINTAXIS PARA RECUPERARLOS ES params['PARAMETER NAME']

      //EN ESTE EJEMPLO, EL PARAMETRO ES OPCIONAL

      if (parametros['numero'] != null) {
        //EL PARAMETRO SIEMPRE SON STRING

        this.numero = parseInt(parametros['numero']);

        this.doble = this.numero * 2;
      }
    });
  }
}
