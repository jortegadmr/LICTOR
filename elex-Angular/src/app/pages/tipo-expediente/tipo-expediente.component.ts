import { Component, OnInit, inject } from '@angular/core';
import { LoginService } from '../../services/auth/login.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TipoExpedienteService } from '../../services/tipo-expediente/tipo-expediente.service';
import { HttpClient } from '@angular/common/http';
import { Tipo } from '../../services/tipo-expediente/tipo-response';

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
  tipo?: Tipo;
  errorMessage:String = "";
 /*  public tipoExpedienteService = inject(TipoExpedienteService); */

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
  
}
