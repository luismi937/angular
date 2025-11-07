import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  private apiUrl = 'https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas';

  constructor(private http: HttpClient) {}

  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.apiUrl);
  }
}
