import { Component, OnInit, DoCheck } from "@angular/core";
@Component({
    selector: "hooks-angular",
    standalone: false,
    templateUrl: "./hooksangular.component.html"
})
export class hooksangular implements OnInit{
    constructor(){
        console.log("Constructor: Primer metodo de inicio de Component")
    }
    ngOnInit(): void {
        console.log("Soy OnInit, despues de constructor")
    }
    ngDoCheck(): void{
        console.log("NgCkeck cambiando algo en render")
    }
}