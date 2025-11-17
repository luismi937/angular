import { Component } from '@angular/core';
import { Coche } from '../../models/producto/coches';

/*
  Componente: PadrecochesComponent (angularcomunicacionmodelos)
  - Componente padre que gestiona la lista de coches y pasa datos a HijococheComponent.
*/
@Component({
  selector: 'app-padrecoches',
  standalone: false,
  templateUrl: './padrecoches.component.html',
  styleUrl: './padrecoches.component.css',
})
export class PadrecochesComponent {
    public cochesArray: Array<Coche>;
    constructor(){
      this.cochesArray = [
        new Coche("Ford", "mustang", 400,30,  false),
         new Coche("lamborghini", "revuleto", 400,30,  false),
          new Coche("bmw", "m3 competition", 400,30,  false),

      ]
    }
}
