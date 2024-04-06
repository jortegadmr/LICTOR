import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { ActuacionesService } from '../../services/actuaciones/actuaciones.service';
import { Actuaciones } from '../../services/actuaciones/actuaciones-response';

@Component({
  selector: 'app-actuaciones',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    AsyncPipe,
    ActuacionesComponent,

  ],
  templateUrl: './actuaciones.component.html',
  styleUrl: './actuaciones.component.css'
})
export class ActuacionesComponent {

  public actuacionesService = inject (ActuacionesService); // Inyectamos el Servicio donde están las llamadas al servidor

  actuaciones: Actuaciones[]=[]; // Guardamos los datos devueltos por el Servicio

  ngOnInit(): void {  // Se ejecuta al inciar el componente, guardamos los datos en la variable "actuaciones"
    this.actuacionesService.getActuaciones().subscribe((actuaciones: any) => {
      this.actuaciones = actuaciones;
    });
  }

  }
