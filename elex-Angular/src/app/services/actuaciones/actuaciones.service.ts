import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActuacionesService {

  private http = inject (HttpClient);
  private readonly actUrl = 'http://localhost:8008/actuaciones/';
  
  constructor() { }
}
