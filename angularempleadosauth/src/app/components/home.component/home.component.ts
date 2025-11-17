/*
  Componente: HomeComponent (angularempleadosauth)
  - Componente raíz que comprueba autenticación y redirige a login si es necesario.
  - Proporciona la acción de logout que limpia la sesión.
*/
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: false
})
export class HomeComponent {
  constructor(private authService: AuthService, private router: Router) {
    if(!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
