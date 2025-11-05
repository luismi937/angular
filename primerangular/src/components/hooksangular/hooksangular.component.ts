import { Component, OnInit, DoCheck } from "@angular/core";
@Component({
    selector: "hooks-angular",
    standalone: false,
    templateUrl: "./hooksangular.component.html"
})
export class hooksangular implements OnInit{
    public mensaje: string;
    constructor(){
        console.log("Constructor: Primer metodo de inicio de Component")
        this.mensaje = "Hoy es miercoles"
    }
    cambiarMensaje(){
        this.mensaje = "y mañana juernes!!!"
    }
    ngOnInit(): void {
        console.log("Soy OnInit, despues de constructor")
    }
    ngDoCheck(): void{
        console.log("NgCkeck cambiando algo en render")
    }
}