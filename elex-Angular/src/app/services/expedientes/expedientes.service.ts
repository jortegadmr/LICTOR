import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpedientesService {
  
  private http = inject (HttpClient);
  private readonly expUrl = 'http://localhost:8008/expedientes/';

  constructor() { }
}
