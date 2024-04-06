import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { TipoExpedienteService } from '../../services/tipo-expediente/tipo-expediente.service';
import { Tipo } from '../../services/tipo-expediente/tipo-response';

@Component({
  selector: 'app-tipo-form',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    RouterModule,
    ReactiveFormsModule,
  ],
  templateUrl: './tipo-form.component.html',
  styleUrl: './tipo-form.component.css'
})
export class TipoFormComponent {

  private fb = inject(FormBuilder);
  private tipoEpedienteService = inject(TipoExpedienteService); //inyeccion de dependencias, inicializa el servicio

  form = this.fb.group({
    
    nombre: ['', [Validators.required]],
    
  })

  create(){

    console.log(this.form.value);

    const tipodato = this.form.value;

    this.tipoEpedienteService.createTipoExpediente(tipodato)
    .subscribe(()=>{
      
    })
    
  }
}
