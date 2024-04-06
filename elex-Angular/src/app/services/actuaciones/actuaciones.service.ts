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
}
