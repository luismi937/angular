/*
  Componente: LoginComponent
  Descripción: Formulario de inicio de sesión que usa AuthService para autenticar.
  Comportamiento:
    - al hacer login, redirige a /perfil en caso de éxito
    - muestra un mensaje de error en caso de fallo
*/
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: false
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe({
      next: () => this.router.navigate(['/perfil']),
      error: () => this.error = 'Credenciales incorrectas'
    });
  }
}
