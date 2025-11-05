import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tablamultiplicar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tablamultiplicar.component.html',
  styleUrls: ['./tablamultiplicar.component.css']
})
export class TablamultiplicarComponent {
  numero: number = 1;
  resultados: number[] = [];

  generarTabla() {
    this.resultados = [];
    for (let i = 1; i <= 10; i++) {
      this.resultados.push(this.numero * i);
    }
  }
}
