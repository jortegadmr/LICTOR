import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { TipoResponse } from "./tipo-response";

@Injectable({
  providedIn: "root"
})

export class TipoExpedienteService {

  private http = inject (HttpClient);
  private readonly tipoUrl = 'http://localhost:8008/tipo-expediente/';
  
  constructor() {}

  getTipoExpediente():Observable<TipoResponse>{
    return this.http.get<TipoResponse>(this.tipoUrl + 'consultar');

  }
}






















// -----------------------------------------------Codigo anterior -----------------------------------------------



/* import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Tipo, TipoResponse } from './tipo-response';

interface State{
  tipos: Tipo[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TipoExpedienteService {

  private http = inject( HttpClient);

  #state = signal<State>({
    loading: true,
    tipos: [],
  })

  // Señal computada de solo lectura
  public tipos = computed( ()=> this.#state().tipos); 
  public loading = computed( ()=> this.#state().loading);
  //--------------------------------

  constructor() {
    console.log('CARGANDO TIPO DE EXPEDIENTES');

    this.http.get<TipoResponse>('http://localhost:8008/tipo-expediente/consultar').pipe()
    .subscribe( res => {

      this.#state.set({
        loading: false,
        tipos: res.data,
      })

    });
  }
}
 */








/* private http = inject(HttpClient);

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
} */