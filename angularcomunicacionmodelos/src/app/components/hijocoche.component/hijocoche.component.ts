/*
  Componente: HijococheComponent (angularcomunicacionmodelos)
  - Componente hijo que representa un coche.
  - Recibe un `Coche` como Input y controla su estado y velocidad.
*/
import { Component, Input } from '@angular/core';
import { Coche } from '../../models/producto/coches';
@Component({
  selector: 'app-hijocoche',
  standalone: false,
  templateUrl: './hijocoche.component.html',
  styleUrl: './hijocoche.component.css',
})
export class HijococheComponent {
  @Input() car!: Coche;
  public mensaje: string;

  constructor(){
    this.car = new Coche("Pontiac", "Firebird", 240, 25, false)
    this.mensaje = "";
  }

  comprobarEstado():boolean{
    if (this.car.estado == false){
      this.mensaje = "el coche esta apagado";
      this.car.velocidad = 0;
      return false;
    }else{
      this.mensaje = "Arrancado";
      return true
    }
  }
  encenderCoche(): void{
    this.car.estado = !this.car.estado;
    this.comprobarEstado();
  }
  acelerarCoche(): void{
    if(this.comprobarEstado() == false){
      alert("¿donde vas? ques estoy apagado")
    }else{
      this.car.velocidad += this.car.aceleracion;
    }
  }
}
