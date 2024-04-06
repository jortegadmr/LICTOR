import { Component, OnInit, inject, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ExpedientesService } from '../../services/expedientes/expedientes.service';

import { TipoExpedienteService } from '../../services/tipo-expediente/tipo-expediente.service';
import { TipoExpedienteComponent } from "../../pages/tipo-expediente/tipo-expediente.component"; //Importar el Servicio adicional 

@Component({
    selector: 'app-expedientes-form',
    standalone: true,
    templateUrl: './expedientes-form.component.html',
    styleUrl: './expedientes-form.component.css',
    imports: [
        RouterLink,
        RouterOutlet,
        RouterModule,
        ReactiveFormsModule,
        TipoExpedienteComponent
    ]
})
export class ExpedientesFormComponent implements OnInit {

  private fb = inject(FormBuilder);
  private expedientesService = inject(ExpedientesService); //Inyeccion de dependencias, inicializa el servicio
  private router = inject(Router);

  public tipoExpedienteService = inject(TipoExpedienteService); //Inyeccion de dependencias, inicializa el servicio de tipo de expediente (adicional)
  ngOnInit(): void {
    // RECIBIMOS LOS TIPOS DE EXPEDIENTES DEL SERVICIO
    // Tenemos que añadirlos al formulario en el Select
    this.tipoExpedienteService.getTipoExpediente()
    .subscribe( (tipos: any) =>{  
      console.log(tipos);
    });
  }
}
