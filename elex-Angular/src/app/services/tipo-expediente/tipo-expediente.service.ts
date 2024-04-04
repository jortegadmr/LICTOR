import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Tipo } from './tipo';

@Injectable({
  providedIn: 'root'
})
export class TipoExpedienteService {

  private http = inject(HttpClient);

  list():Observable<Tipo>{
    return this.http.get<Tipo>("http://localhost:8008/tipo-expediente/consultar").pipe(
      catchError(this.handleError)
    )
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

  private handleError(error:HttpErrorResponse){
    if (error.status === 0) {
      console.error('Se ha producido un error:', error.error);
    }else{
      console.error('Backend retorno el codigo de estado:', error.error);
    }
    return throwError(() => new Error('Algo salio mal; por favor, inténtelo de nuevo.'));
  }
}

