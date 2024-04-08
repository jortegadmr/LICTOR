import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet, Router, ActivatedRoute } from '@angular/router';
import { PdfViewerModule } from 'ng2-pdf-viewer'

import { AsyncPipe } from '@angular/common';
import { DocumentosService } from '../../../services/documentos/documentos.service';
import { Documentos } from '../../../services/documentos/documentos-response';

@Component({
    selector: 'app-pdf',
    standalone: true,
    imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    PdfViewerModule,
    AsyncPipe,

    ],
    templateUrl: './pdf.component.html',
    styleUrl: './pdf.component.css',
})
export class PdfComponent  { 
    public documentService = inject (DocumentosService);
    private route = inject(ActivatedRoute);

    docuMent: Documentos[]=[]; // Guardamos los datos devueltos por el Servicio

    docuMentExiste?: Documentos;

    ngOnInit(): void {  // Se ejecuta al inciar el componente, guardamos los datos en la variable "document"
        
        const documentoId = this.route.snapshot.paramMap.get('id');

        if (documentoId) {
            this.documentService.getDocumento(parseInt(documentoId))
            .subscribe((documentos: Documentos) => {
                this.docuMentExiste = documentos
            });

            const nombrePDF = this.docuMentExiste?.archivo;
        }
      }





}
