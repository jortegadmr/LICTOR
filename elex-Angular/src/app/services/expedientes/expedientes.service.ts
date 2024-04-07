import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Expedientes } from './expedientes-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpedientesService {
  
  private http = inject (HttpClient);
  private readonly expUrl = 'http://localhost:8008/expedientes/';

  constructor() { }

  getExpedientes(): Observable<Expedientes>{
    return this.http.get<Expedientes>(this.expUrl + 'consultar');
  }

  getExpediente(id: number): Observable<Expedientes>{
    return this.http.get<Expedientes>(this.expUrl + 'consultar/' + id);
  }
  createExpediente(expediente: Expedientes): Observable<Expedientes> {
    return this.http.post<Expedientes>(this.expUrl + 'insertar', expediente);
  }

  updateExpediente(id: number, expediente:Expedientes):Observable<Expedientes>{
    return this.http.put<Expedientes>(this.expUrl + 'actualizar/'+ id, expediente);
  }

  deleteExpediente(id: number):Observable<Expedientes>{
    return this.http.delete<Expedientes>(this.expUrl + 'eliminar/' + id);
  }
}
