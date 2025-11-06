import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ para *ngFor
import { RouterModule } from '@angular/router'; // ✅ para routerLink
@Component({
  selector: 'app-menutablamultiplicar', // ejemplo
  templateUrl: './menutablamultiplicar.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule] // ✅ necesario para *ngFor y routerLink
})
export class MenutablamultiplicarComponent {
  numeros: number[] = [1, 2, 3, 4, 5];

  generarNumerosAleatorios() {
    this.numeros = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100));
  }
}
