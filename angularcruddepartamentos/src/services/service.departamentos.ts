import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Departamento } from '../app/models/departamento';

import { environment } from '../environments/environment.development';

@Injectable()
export default class ServiceDepartamentos {
  constructor(private _http: HttpClient) {}

    deleteDepartamento(idDepartamento: number): Observable<any>{
      let request = "api/departamentos/" +idDepartamento;
      let url = environment.urlApiDepartamentos + request;
      return this._http.delete(url);
    }



    
    findDepartamento(idDepartamento: number): Observable<Departamento>{
      let request = "api/departamentos/"+ idDepartamento;
      let url = environment.urlApiDepartamentos + request;
      return this._http.get<Departamento>(url);
    }
    updateDepartamento(departamento: Departamento): Observable<any>{
      let json = JSON.stringify(departamento);
      let header = new HttpHeaders().set("Content-type", "application/json");
      let request = "api/departamentos";
      let url = environment.urlApiDepartamentos +request;
      return this._http.put(url,json, {headers: header});
    }

    createDepartamento(departamento: Departamento): Observable<any>{
        //igual que en react o jquery
        let json = JSON.stringify(departamento)
        //creamos la cabecera
        let header = new HttpHeaders();
        //indicamos el tipo de objeto a enviar en data 
        header = header.set("Content-type", "application/json");
        let request = "api/departamentos";
        let url = environment.urlApiDepartamentos + request
        return this._http.post(url, json, {headers: header})
    }
    
  getDepartamentos(): Observable<Array<Departamento>> {
    let request = 'api/departamentos';

    let url = environment.urlApiDepartamentos + request;

    return this._http.get<Array<Departamento>>(url);
  }
  
}
