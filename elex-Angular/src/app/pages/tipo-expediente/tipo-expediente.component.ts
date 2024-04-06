import { Component, OnInit, inject, input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TipoExpedienteService } from '../../services/tipo-expediente/tipo-expediente.service';
import { Observable } from 'rxjs';
import { Tipo, TipoResponse } from '../../services/tipo-expediente/tipo-response';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-tipo-expediente',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    AsyncPipe,
  ],
  templateUrl: './tipo-expediente.component.html',
  styleUrl: './tipo-expediente.component.css'
})


export class TipoExpedienteComponent implements OnInit {
 
  

  public tipoResult$!: Observable<TipoResponse>;
  public tipoExpedienteService = inject(TipoExpedienteService); //Llamada o Inyección del Service Donde está la logica
  
  ngOnInit(): void {
    
    this.tipoResult$ = this.tipoExpedienteService.getTipoExpediente();
    this.tipoResult$.subscribe((data:TipoResponse)=>{
      console.log(data);
    })
      

    
    

  }
}


/* Parece que no funciona

this.tipoResult$ = this.tipoExpedienteService.getTipoExpediente();
    console.log(this.tipoResult$);
 */







// -----------------------------------------------Codigo anterior -----------------------------------------------

/* 

tipo?: Tipo;
  errorMessage:String = "";
  public tipoExpedienteService = inject(TipoExpedienteService);

 constructor(private tipoExpedienteService: TipoExpedienteService) {
  this.tipoExpedienteService.list()
  .subscribe({
    next: (tipoData)=>{
      this.tipo = tipoData;
    },
    error: (errorData)=>{
      this.errorMessage = errorData
    },
    complete: ()=>{
      console.info('Tipos de expedientes listado-MOSTRADOS');
    }
  })
  
}

 */