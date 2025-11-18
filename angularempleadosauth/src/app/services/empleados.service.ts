/*
  Servicio: EmpleadosService
  Descripción: Provee métodos autenticados para obtener datos del empleado (perfil, subordinados).
  Implementación:
    - añade encabezado Authorization con Bearer token obtenido desde AuthService
*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  private baseUrl = 'https://apiempleadoscoreoauth.azurewebsites.net/';

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getPerfil(): Observable<any> {
    return this.http.get(this.baseUrl + 'api/empleados/perfil', { headers: this.getHeaders() });
  }

  getSubordinados(): Observable<any> {
    return this.http.get(this.baseUrl + 'api/empleados/subordinados', { headers: this.getHeaders() });
  }
}
