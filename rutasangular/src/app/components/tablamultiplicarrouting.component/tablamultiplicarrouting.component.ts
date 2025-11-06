import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tablamultiplicarrouting',
  templateUrl: './tablamultiplicarrouting.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class TablamultiplicarroutingComponent {
  tabla: { multiplicador: number; resultado: number }[] = [];

  ngOnInit() {
    const numero = 5; // ejemplo
    this.tabla = Array.from({ length: 10 }, (_, i) => ({
      multiplicador: i + 1,
      resultado: numero * (i + 1)
    }));
  }
}
