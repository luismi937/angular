import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Coche } from '../../models/coche';

@Injectable({
  providedIn: 'root'
})
export class ServiceCoches {
  constructor(private _http: HttpClient) {}

  // 🔹 Usando HttpClient (forma recomendada en Angular)
  getCochesHttpClient(): Observable<Coche[]> {
    const request = 'webresources/coches';
    const url = environment.urlApiCoches + request;
    return this._http.get<Coche[]>(url);
  }

  // 🔹 Usando fetch() con Promesa
  getCochesPromise(): Promise<any> {
    const request = 'webresources/coches';
    const url = environment.urlApiCoches + request;
    console.log(url);

    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
        return response.json();
      })
      .catch(error => {
        console.error('Error al obtener coches (Promise):', error);
        throw error;
      });
  }

  // 🔹 Versión Promise tipada correctamente
  getCoches(): Promise<Coche[]> {
    const request = 'webresources/coches';
    const url = environment.urlApiCoches + request;

    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
        return response.json() as Promise<Coche[]>;
      })
      .catch(error => {
        console.error('Error al obtener coches (fetch):', error);
        throw error;
      });
  }
}
