import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plantilla } from '../../models/plantilla';

@Injectable({
  providedIn: 'root'
})
export class ServicePlantillas {
  private apiUrl: string = 'https://apiplantillacore.azurewebsites.net/api/Plantilla';

  constructor(private _http: HttpClient) {}

  // Obtener las funciones disponibles
  getFunciones(): Observable<any> {
    const url = this.apiUrl ;
    return this._http.get(url);
  }

  // Obtener plantillas por función
  getPlantillasPorFuncion(funcion: string): Observable<Plantilla[]> {
    const url = this.apiUrl + 'api/Plantilla/PlantillaFuncion/' + funcion;
    return this._http.get<Plantilla[]>(url);
  }
}
