import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Documentos } from './documentos-response';

@Injectable({
  providedIn: 'root'
})
export class DocumentosService {

  private http = inject (HttpClient);
  private readonly docUrl = 'http://localhost:8008/documentos/';

  constructor() { }

  getDocumentos(): Observable<Documentos>{
    return this.http.get<any>(this.docUrl + 'consultar');
  }
  getDocumento(id: number): Observable<Documentos>{
    return this.http.get<any>(this.docUrl + 'consultar/' + id);
  }
  createDocumento(documento: Documentos): Observable<Documentos> {
    return this.http.post<Documentos>(this.docUrl + 'insertar', documento);
  }

  updateDocumento(id: number, documento: Documentos): Observable<Documentos>{
    return this.http.put<Documentos>(this.docUrl + 'actualizar/' + id, documento);
  }

  deleteDocumento(id: number): Observable<Documentos>{
    return this.http.delete<Documentos>(this.docUrl + 'borrar/' + id);
  }
}
