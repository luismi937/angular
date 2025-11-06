import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-deportes',
  standalone: false,
  templateUrl: './padredeportes.component.html',
  styleUrl: './padredeportes.component.css',
})
export class PadredeportesComponent {
  public deportes: Array<string>;
  public mensaje: string;

  //necesitamos un metodo que recibira event que va a ser cualquier tipado (any)
  seleccionarFavoritoPadre(event: any): void{
    this.mensaje = "deporte Favorito" + event
    console.log("Comunicando al padre!!!" +event);

  }



  constructor(){
    this.mensaje = "";
    this.deportes = ["Futbol", "baloncesto","tenis", "padel"];
  }

}
