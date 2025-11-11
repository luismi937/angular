import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plantilla } from '../../models/plantilla';

@Injectable({
  providedIn: 'root'
})
export class ServicePlantillas {
  private apiUrl: string = 'https://apiplantillacore.azurewebsites.net/';

  constructor(private _http: HttpClient) {}

  // Obtener las funciones disponibles
  getFunciones(): Observable<string[]> {
    const url = this.apiUrl + 'api/plantillas/funciones';
    return this._http.get<string[]>(url);
  }

  // Obtener plantillas por función
  getPlantillasPorFuncion(funcion: string): Observable<Plantilla[]> {
    const url = this.apiUrl + 'api/plantillas/plantillafuncion/' + funcion;
    return this._http.get<Plantilla[]>(url);
  }
}
