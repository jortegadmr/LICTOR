import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Actuaciones } from './actuaciones-response';

@Injectable({
  providedIn: 'root'
})
export class ActuacionesService {

  private http = inject (HttpClient);
  private readonly actUrl = 'http://localhost:8008/actuaciones/';
  
  constructor() { }

  getActuaciones(): Observable<Actuaciones>{
    return this.http.get<Actuaciones>(this.actUrl + 'listado');
  }

  getActuacion(id: number): Observable<Actuaciones>{
    return this.http.get<Actuaciones>(this.actUrl + 'consultar/' + id);
  }

  createActuacion(actuacion: Actuaciones): Observable<Actuaciones> {
    return this.http.post<Actuaciones>(this.actUrl + 'nueva', actuacion);
  }

  updateActuacion(id: number, actuacion:Actuaciones):Observable<Actuaciones>{
    return this.http.put<Actuaciones>(this.actUrl + 'actualizar', actuacion);
  }
  
  deleteActuacion(id: number):Observable<Actuaciones>{
    return this.http.delete<Actuaciones>(this.actUrl + 'eliminar/' + id);
  }
}
