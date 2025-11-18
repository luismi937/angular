import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-components.components',
  templateUrl: './auth-components.components.html',
  styleUrl: './auth-component.components.css',
  standalone: false
})
export class AuthComponentsComponents {

  email: string = 'user1@mail.com';
  password: string = '12345';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  login() {
    const base =
      (window as any).__env?.API_BASE ||
      'https://apitiendacubos2025a.azurewebsites.net/';

    this.http
      .post(base + 'auth/login', {
        email: this.email,
        password: this.password
      })
      .subscribe(
        (res: any) => {
          localStorage.setItem('token', res.token || res.accessToken || '');
          alert('Logueado');
          this.router.navigate(['/']);
        },
        () => {
          alert('Login fallido');
        }
      );
  }
}

