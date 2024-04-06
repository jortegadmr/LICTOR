import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterModule, RouterOutlet, Router } from '@angular/router';
import { DocumentosService } from '../../services/documentos/documentos.service';
import { Documentos } from '../../services/documentos/documentos-response';

@Component({
  selector: 'app-documentos-form',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    RouterModule,
    ReactiveFormsModule,
  ],
  templateUrl: './documentos-form.component.html',
  styleUrl: './documentos-form.component.css'
})
export class DocumentosFormComponent {
  private fb = inject(FormBuilder);
  private docService = inject(DocumentosService); //inyeccion de dependencias, inicializa el servicio
  private router = inject(Router);

  form = this.fb.group({

    nombre: ['', [Validators.required]],
    fecha: ['', [Validators.required]],
    descripcion: ['', [Validators.required]],
  })

  /* create() {
    // Verificar si this.form no es nulo
    if (this.form !== null) {
      // Verificar si el formulario es válido antes de continuar
      if (this.form.valid) {
        // Obtener los valores del formulario y proporcionar valores predeterminados en caso de que sean undefined
        const nombre = this.form.get('nombre')?.value ?? '';
        const fecha = this.form.get('fecha')?.value ?? '';
        const descripcion = this.form.get('descripcion')?.value ?? '';
  
        // Crear un objeto con los datos del formulario
        const documentosdato: Documentos = { 
          id: 0, // Supongo que el ID se generará automáticamente en el backend
        nombre: nombre,
        descripcion: descripcion,
        fecha: fecha,
        archivo: null, // Asumiendo que el archivo aún no se ha subido
        tipo: null // Asumiendo que el tipo aún no se ha establecido
        };
  
        // Llamar al servicio para crear el tipo de expediente
        this.docService.createDocumento(documentosdato)
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
  } */
  
}
