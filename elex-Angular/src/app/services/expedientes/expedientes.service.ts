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
}
