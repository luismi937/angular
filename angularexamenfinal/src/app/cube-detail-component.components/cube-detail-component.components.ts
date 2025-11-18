import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-cube-detail-component.components',
  templateUrl: './cube-detail-component.components.html',
  styleUrl: './cube-detail-component.components.css',
  standalone: false
})
export class CubeDetailComponentComponents implements OnInit {
  cube: any = null

  constructor(private route: ActivatedRoute, private http: HttpClient){}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const base = (window as any).__env?.API_BASE || 'https://apitiendacubos2025a.azurewebsites.net'
    this.http.get(base + 'cubos/' +id).subscribe(
      (res) => (this.cube = res),
      () => {}
    )
  }
  comprar(): void{
    const token = localStorage.getItem('token');
    if(!token){
      alert('necesitas login')
      return;
    }
    const base = (window as any).__env?.API_BASE|| 'https://apitiendacubos2025a.azurewebsites.net'
    this.http.post(base + 'compras', 
      {productoId: this.cube.id, cantidad:1},
      {headers: new HttpHeaders({Authorization: 'Bearer' + token})}
    )
    .subscribe(
      ()=> alert('compra realizada'),
      (err)=>alert('Error')
    )
  }

}
