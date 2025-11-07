import { Injectable } from '@angular/core';
import { Persona } from '../../models/personas';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ServicePersona {
  //para poder realizar peticiones necesitamos el objeto hhtpClient dicho objeto debemos 
  //inyectarlo en las clases que usemos con apis
  constructor(private _http: HttpClient){}


  //si vamos a devolver la peticion el objeto a devolver es un observable<any> para poder susbcribirnos
  getPersonas(): Observable<any> {
    let urlApi = "https://servicioapipersonasmvcpgs.azurewebsites.net/";
    let request = "api/personas"
    return this._http.get(urlApi + request);
  }
  getPersonasPromise(): Promise<any> {
    let urlApi = "https://servicioapipersonasmvcpgs.azurewebsites.net/";
    let request = "api/personas"
    let promise = new Promise((resolve)=>{
      this._http.get(urlApi + request).subscribe(response =>{
        resolve(response)
      })
    })
    return promise;
  }
}
