import { Component, inject } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { TipoExpedienteService } from '../../services/tipo-expediente/tipo-expediente.service';
import { Tipo } from '../../services/tipo-expediente/tipo-response';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-tipo-expediente',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    RouterModule,
    AsyncPipe,
    TipoExpedienteComponent
  ],
  templateUrl: './tipo-expediente.component.html',
  styleUrl: './tipo-expediente.component.css'
})


export class TipoExpedienteComponent {
  public tipoExpedienteService = inject (TipoExpedienteService); // Inyectamos el Servicio donde están las llamadas al servidor

  tipos: Tipo[]=[]; // Guardamos los datos devueltos por el Servicio
  
  ngOnInit(): void {  // Se ejecuta al inciar el componente, guardamos los datos en la variable "tipos"

    this.tipoExpedienteService.getTipoExpediente().subscribe( (tipos: any) =>{  
      console.log(tipos);
      this.tipos=tipos;
    });

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