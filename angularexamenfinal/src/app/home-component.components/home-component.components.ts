import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http' 

@Component({
  selector: 'app-home-component.components',
  templateUrl: './home-component.components.html',
  styleUrl: './home-component.components.css',
  standalone: false
})
export class HomeComponentComponents  implements OnInit{
  cubes: any[] = [];
  marcas: string[] = [];
  brand: string = '';

  constructor(private http: HttpClient){}
  ngOnInit(): void {
    const base = (window as any).__env?.API_BASE || 'https://apitiendacubos2025a.azurewebsites.net'
    this.http.get(base + 'cubos').subscribe((res:any)=>
    (this.cubes = res || []), () => {})
    this.http.get(base + 'marcas').subscribe((res:any)=>
    (this.marcas = res || []), () => {})
  
  }
  onBrand(b: string): void{
    this.brand = b
  }

  get filtered(){
    return this.brand ?
    this.cubes.filter((c)=> c.marca === this.brand): this.cubes
  }


}
