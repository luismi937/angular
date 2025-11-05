import { Component } from '@angular/core';
 
@Component({
  selector: 'deportesv2-component',
  standalone: false,
  templateUrl: './deportesv2.component.html',
  styleUrls: ['./deportesv2.component.css'],
})
export class Deportesv2Component {
 public deportes:Array<string>;
 public numeros:Array<number>;
 constructor(){
   this.deportes = ['Futbol', 'Baloncesto', 'Tenis', 'Ciclismo', 'Natacion'];
   this.numeros = [1, 2, 3, 4, 5];
 }
}