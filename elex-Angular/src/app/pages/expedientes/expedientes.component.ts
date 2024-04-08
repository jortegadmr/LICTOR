import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { ExpedientesService } from '../../services/expedientes/expedientes.service';
import { Expedientes } from '../../services/expedientes/expedientes-response';

@Component({
  selector: 'app-expedientes',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    AsyncPipe,
    ExpedientesComponent,
  ],
  templateUrl: './expedientes.component.html',
  styleUrl: './expedientes.component.css'
})
export class ExpedientesComponent implements OnInit {

  public expedientesService = inject (ExpedientesService); // Inyectamos el Servicio donde están las llamadas al servidor

  expedientes: Expedientes[]=[]; // Guardamos los datos devueltos por el Servicio

  ngOnInit(): void {  // Se ejecuta al inciar el componente, guardamos los datos en la variable "expedientes"
    
    this.expedientesService.getExpedientes().subscribe( (expedientes: any) =>{
      console.log(expedientes);
      this.expedientes=expedientes;
    })
  }

  deleteExpediente( expediente:Expedientes) {
    this.expedientesService.deleteExpediente(expediente.id)
    .subscribe( () => {
      console.log('Ok, Eliminado');
      alert('Se ha eliminado el expediente correctamente');
      this.expedientesService.getExpedientes().subscribe( (expedientes: any) =>{
        console.log(expedientes);
        this.expedientes=expedientes;
      })
    })
  }
}
