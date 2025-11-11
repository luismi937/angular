import { Plantilla } from '../../models/plantilla';

import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../environments/environment.development';

@Injectable()
export class ServicePlantilla {
  constructor(private _http: HttpClient) {}

  getFunciones(): Observable<Array<string>> {
    let request = 'api/plantilla/funciones';

    let url = environment.apiUrl + request;

    //DENTRO DE HTTPGET PODEMOS INDICAR EL TIPO DE OBJETO A DEVOLVER

    //MEDIANTE DIAMONDS <T>

    return this._http.get<Array<string>>(url);
  }

  getPlantillaFuncion(funcion: string): Promise<Array<Plantilla>> {
    let request = 'api/plantilla/plantillafuncion/' + funcion;

    let url = environment.apiUrl + request;

    const plantillas = fetch(url).then((response) => response.json());

    return plantillas;
  }
  getPlantillaFunciones(funciones: Array<string>): Observable<Array<Plantilla>> { 

    //?funcion=Enfermero&funcion=Enfermera 

    let datos = ""; 

    for (var funcion of funciones){ 

      datos += "funcion=" + funcion + "&"; 

    } 

    //?funcion=Enfermero&funcion=Enfermera& 

    //ELIMINAMOS EL ULTIMO CARACTER & 

    datos = datos.substring(0, datos.length - 1); 

    let request = "api/plantilla/plantillafunciones?" + datos; 

    let url = environment.apiUrl + request; 

    return this._http.get<Array<Plantilla>>(url); 

  } 

}

 