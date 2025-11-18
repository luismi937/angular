import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router'

@Component({
  selector: 'app-compras-component.components',
  templateUrl: './compras-component.components.html',
  styleUrl: './compras-component.components.css',
  standalone: false,
})
export class ComprasComponentComponents implements OnInit{
  compras: any[] = [];

  constructor(private http: HttpClient, private router: Router){}
  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (!token){
      this.router.navigate(['/login'])
      return
    }
    const base = (window as any)._env?.API_BASE || 'https://apitiendacubos2025a.azurewebsites.net'

    this.http.get (base + 'compras/mias',{
      headers: new HttpHeaders({Authorization: 'Bearer' + token})
    }).subscribe(
      (res: any)=> this.compras = res || []
    )
  }

}
