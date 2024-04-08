import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { DocumentosService } from '../../services/documentos/documentos.service';
import { Documentos } from '../../services/documentos/documentos-response';

@Component({
  selector: 'app-documentos',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    AsyncPipe,
    DocumentosComponent
  ],
  templateUrl: './documentos.component.html',
  styleUrl: './documentos.component.css'
})
export class DocumentosComponent {

  public documentService = inject (DocumentosService); // Inyectamos el Servicio donde están las llamadas al servidor
  private router = inject (Router);

  document: Documentos[]=[]; // Guardamos los datos devueltos por el Servicio

  ngOnInit(): void {  // Se ejecuta al inciar el componente, guardamos los datos en la variable "document"
    this.documentService.getDocumentos().subscribe((data: any) => {
      this.document = data;
    });
  }

  deleteDocumento( documento:Documentos) {
    this.documentService.deleteDocumento(documento.id)
    .subscribe( () => {
      console.log('Ok, Eliminado');
      alert('Se ha eliminado el Documento correctamente');
      this.router.navigate(['/documentos']).then(() => 
        window.location.reload());
    })
  }
}
