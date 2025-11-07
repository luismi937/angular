import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Comic } from '../../models/producto/comics';
import { ServiceComics } from '../../services/service.comics';


@Component({
  selector: 'app-libreria',
  standalone: false,
  templateUrl: './libreria.component.html',
  styleUrl: './libreria.component.css',
  //debemos declarar el servicio para poder recuperarlo dentro de un constructor
})
export class LibreriaComponent implements OnInit{
@ViewChild("cajanombre") cajaNombre !: ElementRef;
@ViewChild("cajadescripcion") cajaDescripcion !: ElementRef;
@ViewChild("cajaimagen") cajaimagen!: ElementRef;
  public comics!: Array<Comic>; 
  public comicFavorito!: Comic;

  createComic(): void{
    let nombre = this.cajaNombre.nativeElement.value
    let descripcion = this.cajaDescripcion.nativeElement.value
    let imagen = this.cajaimagen.nativeElement.value
    let comicNew = new Comic(nombre, imagen, descripcion);
    this.comics.push(comicNew)
  }
  seleccionarFavorito(favorito: Comic): void{
    this.comicFavorito = favorito;  
  }
  deleteComic(index: number){
    this.comics.splice(index, 1)
  }
  constructor(private _service: ServiceComics){}

    ngOnInit(): void{
      this.comics = this._service.getComics();
    }
   
  }

