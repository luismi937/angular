import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  private apiUrl = 'https://apiapuestas.azurewebsites.net/ '; // reemplaza con tu URL

  constructor(private http: HttpClient) { }

  getJugadores(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
