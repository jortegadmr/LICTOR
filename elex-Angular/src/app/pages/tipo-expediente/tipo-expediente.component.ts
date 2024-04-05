import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TipoExpedienteService } from '../../services/tipo-expediente/tipo-expediente.service';


@Component({
  selector: 'app-tipo-expediente',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './tipo-expediente.component.html',
  styleUrl: './tipo-expediente.component.css'
})


export class TipoExpedienteComponent {

  public tipoExpedienteService = inject(TipoExpedienteService); //Llamada o Inyección del Service Donde está la logica
  
  
}

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