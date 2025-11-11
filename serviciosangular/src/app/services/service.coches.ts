import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Coche } from '../../models/coche';

@Injectable({
  providedIn: 'root'
})
export class ServiceCoches {
  constructor(private _http: HttpClient) {}

  // 🔹 1. Usando HttpClient (recomendado en Angular)
  getCochesHttpClient(): Observable<Coche[]> {
    const request = 'webresources/coches';
    const url = environment.urlApiCoches + request;
    return this._http.get<Coche[]>(url);
  }

  // 🔹 2. Usando fetch() con Promise
  getCochesPromise(): Promise<any> {
    const request = 'webresources/coches';
    const url = environment.urlApiCoches + request;
    console.log(url);

    const promise = new Promise((resolve, reject) => {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
          }
          return response.json();
        })
        .then(data => resolve(data))
        .catch(error => {
          console.error('Error al obtener coches (Promise):', error);
          reject(error);
        });
    });

    return promise;
  }

  // 🔹 3. Versión Promise tipada correctamente
  getCoches(): Promise<Coche[]> {
    const request = 'webresources/coches';
    const url = environment.urlApiCoches + request;

    const coches = fetch(url)
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

    return coches;
  }
}
