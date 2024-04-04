import { Component, OnInit, inject } from '@angular/core';
import { LoginService } from '../../services/auth/login.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TipoExpedienteService } from '../../services/tipo-expediente/tipo-expediente.service';
import { HttpClient } from '@angular/common/http';

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

  public tipoExpedienteService = inject(TipoExpedienteService);

  constructor(){
    this.tipoExpedienteService.list();
    console.log(this.tipoExpedienteService.list());
  }
  
}
