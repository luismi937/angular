import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-component.components',
  templateUrl: './profile-component.components.html',
  styleUrl: './profile-component.components.css',
  standalone:false
})
export class ProfileComponentComponents implements OnInit{
  profile: any = null;

  constructor(private http: HttpClient, private router: Router){}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if(!token){
      this.router.navigate(['/login'])
      return;
    }
    const base = (window as any).__env?.API_BASE || "https://apitiendacubos2025a.azurewebsites.net"
    this.http.get(base + 'perfil',{
      headers: new HttpHeaders({
        Authorization: 'Bearer' +token
      })
    })
    .subscribe(
      (res) => (this.profile = res),
      () => {}
    )
  }

}
