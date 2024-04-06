import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocumentosService {

  private http = inject (HttpClient);
  private readonly docUrl = 'http://localhost:8008/documentos/';

  constructor() { }
}
