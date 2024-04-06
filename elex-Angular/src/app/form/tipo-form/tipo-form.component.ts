import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterModule, RouterOutlet, Router } from '@angular/router';
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
  private tipoExpedienteService = inject(TipoExpedienteService); //inyeccion de dependencias, inicializa el servicio
  private router = inject(Router);

  form = this.fb.group({
    
    nombre: ['', [Validators.required]],
    
  })

  create() {
    // Verificar si this.form no es nulo
    if (this.form !== null) {
      // Verificar si el formulario es válido antes de continuar
      if (this.form.valid) {
        // Obtener el nombre del formulario y proporcionar un valor predeterminado en caso de que sea undefined
        const nombre = this.form.get('nombre')?.value ?? '';
  
        // Crear un objeto con el nombre
        const tipodato: Tipo = { id: 0, nombre: nombre };
  
        // Llamar al servicio para crear el tipo de expediente
        this.tipoExpedienteService.createTipoExpediente(tipodato)
          .subscribe(() => {
            // Manejar la respuesta o realizar acciones adicionales si es necesario
            this.router.navigate(['tipo-expediente']);
            location.reload(); // Recargar la página
          });
      } else {
        console.error('El formulario no es válido');
      }
    } else {
      console.error('El formulario es nulo');
    }
  }
  
  
  
  
  
}
