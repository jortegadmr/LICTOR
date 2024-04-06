import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
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

  document: Documentos[]=[]; // Guardamos los datos devueltos por el Servicio

  ngOnInit(): void {  // Se ejecuta al inciar el componente, guardamos los datos en la variable "document"
    this.documentService.getDocumentos().subscribe((data: Documentos[]) => {
      this.document = data;
    });
  }
}
