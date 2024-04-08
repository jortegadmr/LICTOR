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

    docuMentExiste?: Documentos;

    docuMent: Documentos[]=[]; // Guardamos los datos devueltos por el Servicio
    docuUrl: string = '';



    ngOnInit(): void {  // Se ejecuta al inciar el componente, guardamos los datos en la variable "document"
        
        const documentoId = this.route.snapshot.paramMap.get('id');

        this.documentService.getDocumentos()
        .subscribe((documentos: any) => {
            this.docuMent = documentos;
        });
        if (documentoId){
            this.documentService.getDocumento(parseInt(documentoId))
            .subscribe((documentos: any) => {
                this.docuMentExiste = documentos;

                this.docuUrl = `../../../../assets/${this.docuMentExiste?.nombre}.pdf`;
                console.log(this.docuUrl);
            });
        }
      }





}
