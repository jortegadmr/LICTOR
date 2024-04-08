import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterModule, RouterOutlet, Router, ActivatedRoute } from '@angular/router';
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
export class TipoFormComponent implements OnInit {
 
  private fb = inject(FormBuilder);
  private tipoExpedienteService = inject(TipoExpedienteService); //inyeccion de dependencias, inicializa el servicio
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    const tipoId = this.route.snapshot.paramMap.get('id');
    console.log(tipoId);
  }

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
            alert('Tipo de expediente creado con exito');
            this.router.navigate(['tipo-expediente']).then(() => window.location.reload());
            
          });
      } else {
        console.error('El formulario no es válido');
        alert('Rellene el formulario');
      }
    } else {
      console.error('El formulario es nulo');
      alert('Rellene el formulario correctamente');
    }
  }
  
  
  
  
  
}
