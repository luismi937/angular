/*
  Servicio: AuthService
  Descripción: Gestiona la autenticación contra el backend y el almacenamiento del token.
  Funciones principales:
    - login: obtiene token mediante OAuth y lo guarda en localStorage
    - getToken / logout: gestión simple del token
    - isAuthenticated / isLoggedIn: comprobación de estado de sesión
*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://apiempleadoscoreoauth.azurewebsites.net/api/empleados';
  private tokenKey = 'empleados_token';

  constructor(private http: HttpClient) {}

  // Login y obtener token
  login(username: string, password: string): Observable<any> {
    const body = new URLSearchParams();
    body.set('grant_type', 'password');
    body.set('username', username);
    body.set('password', password);

    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    return this.http.post('https://apiempleadoscoreoauth.azurewebsites.net/oauth/token', body.toString(), { headers })
      .pipe(
        tap((res: any) => {
          if (res.access_token) {
            localStorage.setItem(this.tokenKey, res.access_token);
          }
        })
      );
  }

  // Obtener token guardado
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Cerrar sesión
  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  // Saber si hay token
  isAuthenticated(): boolean {
    return !!this.getToken();
  }
  
  isLoggedIn(): boolean {
  return this.isAuthenticated();
}

}
