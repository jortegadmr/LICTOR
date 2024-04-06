import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { ExpedientesService } from '../../services/expedientes/expedientes.service';
import { Expedientes } from '../../services/expedientes/expedientes-response';
import { TipoExpedienteComponent } from '../tipo-expediente/tipo-expediente.component';

@Component({
  selector: 'app-expedientes',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    AsyncPipe,
    ExpedientesComponent,
    TipoExpedienteComponent
  ],
  templateUrl: './expedientes.component.html',
  styleUrl: './expedientes.component.css'
})
export class ExpedientesComponent {

  public expedientesService = inject (ExpedientesService); // Inyectamos el Servicio donde están las llamadas al servidor

  expedientes: Expedientes[]=[]; // Guardamos los datos devueltos por el Servicio

  ngOnInit(): void {  // Se ejecuta al inciar el componente, guardamos los datos en la variable "expedientes"
    
    this.expedientesService.getExpedientes().subscribe( (expedientes: any) =>{
      console.log(expedientes);
      this.expedientes=expedientes;
    })
  }
}
