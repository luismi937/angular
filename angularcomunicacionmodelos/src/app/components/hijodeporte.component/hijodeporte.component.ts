import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo-deporte',
  standalone: false,
  templateUrl: './hijodeporte.component.html',
  styleUrl: './hijodeporte.component.css',
})
export class HijodeporteComponent {
  @Input() sport!: string;
  @Output() seleccionarFavoritoPadre: EventEmitter<any> = new EventEmitter()

  //necesitmos un metodo para que cada hijo realice click y a su vez llamamos al parent
  seleccionarFavoritoHijo(): void{
    //dentro de emit()enviaremos loa parametros que necesitemos
    this.seleccionarFavoritoPadre.emit();
  }

}
