import { Component } from '@angular/core';

@Component({
  selector: 'app-deportes',

  templateUrl: './deportes.component.html',
  styleUrl: './deportes.component.css',

  standalone: false,

})
export class DeportesComponent {
  public sports: Array<string>;
  public numeros: Array<number>

  constructor() {
    this.numeros = [4,5,6,7,78,99,2]
    this.sports = ['Canicas', 'Curling', 'Dardos', 'Petanca', `padel`];
  }
}
