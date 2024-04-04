import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipoExpedienteService {

  private http = inject(HttpClient);

  list(){
    return this.http.get("http://localhost:8008/tipo-expediente/consultar").pipe()
  }

  create(contact:any){
    return this.http.post("http://localhost:8008/tipo-expediente/insertar", contact).pipe()
  }

  update(id: number, contact:any){
    return this.http.put("http://localhost:8008/tipo-expediente/actualizar", contact).pipe()
  }

  delete (id: number){
    return this.http.delete("http://localhost:8008/tipo-expediente/borrar/${id}").pipe()
  }

  constructor() { }
}
