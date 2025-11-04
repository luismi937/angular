import {Component} from "@angular/core";

@Component({
    //debemos declarar el component mediante su selector en html
    //en angular los selectores llevan guion 
    selector: "primer-component",
    standalone:false,
    //por ahora no voy a tener html separado podremos incluirlo dentro del propio component
    templateUrl: "./primer.component.html",
    styleUrls: ["./primer.component.css"]
})
    //cada component debe tener una clase asociada en su ts dicho nombre de clase si lleva mayusxulas 
    //y se declara dentro de app-module.ts
export class PrimerComponent{
    public titulo: string;
    public descripcion: string;
    public year: number;

    //en angular al igual que en react tenemos un constructor 
    //enn dicho constructor sera donde inicializemos/instanciaremos
    //los elementos de mi clase
    constructor(){
        //para acceder a los objetos de la clase usamos la palabra this
        this.titulo = "Hoy es martes";
        this.descripcion = "hoy gana el atleti"
        this.year = 2025;
    }
}