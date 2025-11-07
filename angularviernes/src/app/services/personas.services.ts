import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../../models/persona.model';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  private apiUrl = 'https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas';

  constructor(private http: HttpClient) {}

  // 1️⃣ Usando HttpClient
  getPersonasHttp(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.apiUrl);
  }

  // 2️⃣ Usando Axios
  async getPersonasAxios(): Promise<Persona[]> {
    try {
      const response = await axios.get<Persona[]>(this.apiUrl);
      return response.data;
    } catch (error) {
      console.error('Error con Axios:', error);
      return [];
    }
  }

  // 3️⃣ Usando Fetch API nativo
  async getPersonasFetch(): Promise<Persona[]> {
    try {
      const response = await fetch(this.apiUrl);
      if (!response.ok) throw new Error('Error en Fetch');
      const data = await response.json();
      return data as Persona[];
    } catch (error) {
      console.error('Error con Fetch:', error);
      return [];
    }
  }
}
