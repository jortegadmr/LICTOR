import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { DocumentosService } from '../../services/documentos/documentos.service';
import { Documentos } from '../../services/documentos/documentos-response';

import {jsPDF} from 'jspdf';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  private http = inject (HttpClient);

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

  generatePDF(documento:Documentos) {
    const doc = new jsPDF();
    
    // Tendria que ir una imagen o un logo
    // ----
    doc.text('Titulo del Documento: ' + documento.nombre, 20, 70);
    doc.text('Fecha del Documento: ' + documento.fecha, 20, 80);
    doc.text('Descripción del Documento: ' + documento.descripcion, 20, 90);
    // ----
    doc.text('Actuación Relacionada: ' + documento.tipo.nombre, 20, 110);
    doc.text('Expediente de la Actuación: ' + documento.tipo.expediente.numero, 20, 120);
    doc.text('Estado de la Actuación: ' + (documento.tipo.estado ? 'Activo' : 'Inactivo'), 20, 130);
    // ----
    doc.text('Datos del expediente:', 20, 150,);
    doc.text('Fecha: ' + documento.tipo.expediente.fecha, 30, 170);
    doc.text('Materia: ' + documento.tipo.expediente.materia, 30, 180);
    doc.text('Responsable: ' + documento.tipo.expediente.responsable, 30, 190);
    doc.text('Segundo responsable: ' + (documento.tipo.expediente.responsable2 || 'No especificado'), 30, 200);
    doc.text('Consejería: ' + documento.tipo.expediente.consejeria, 30, 210);
    doc.text('Descripción: ' + documento.tipo.expediente.descripcion, 30, 220);
    doc.text('Condición: ' + documento.tipo.expediente.condicion, 30, 230);
    doc.text('Estado: ' + (documento.tipo.expediente.estado ? 'Activo' : 'Inactivo'), 30, 250);
    doc.text('Tipo Expediente: ' + documento.tipo.expediente.expediente.nombre, 30, 260);
    doc.text('Precio: ' + documento.tipo.expediente.precio + '€', 30, 240);

    doc.save(documento.nombre+'.pdf');

  }

  constructor() { }

  generateAndSavePDF(documento: Documentos): void {
    const doc = new jsPDF();
    
    // Genera el contenido del PDF
    // Tendria que ir una imagen o un logo
    // ----
    doc.text('Titulo del Documento: ' + documento.nombre, 20, 70);
    doc.text('Fecha del Documento: ' + documento.fecha, 20, 80);
    doc.text('Descripción del Documento: ' + documento.descripcion, 20, 90);
    // ----
    doc.text('Actuación Relacionada: ' + documento.tipo.nombre, 20, 110);
    doc.text('Expediente de la Actuación: ' + documento.tipo.expediente.numero, 20, 120);
    doc.text('Estado de la Actuación: ' + (documento.tipo.estado ? 'Activo' : 'Inactivo'), 20, 130);
    // ----
    doc.text('Datos del expediente:', 20, 150,);
    doc.text('Fecha: ' + documento.tipo.expediente.fecha, 30, 170);
    doc.text('Materia: ' + documento.tipo.expediente.materia, 30, 180);
    doc.text('Responsable: ' + documento.tipo.expediente.responsable, 30, 190);
    doc.text('Segundo responsable: ' + (documento.tipo.expediente.responsable2 || 'No especificado'), 30, 200);
    doc.text('Consejería: ' + documento.tipo.expediente.consejeria, 30, 210);
    doc.text('Descripción: ' + documento.tipo.expediente.descripcion, 30, 220);
    doc.text('Condición: ' + documento.tipo.expediente.condicion, 30, 230);
    doc.text('Estado: ' + (documento.tipo.expediente.estado ? 'Activo' : 'Inactivo'), 30, 250);
    doc.text('Tipo Expediente: ' + documento.tipo.expediente.expediente.nombre, 30, 260);
    doc.text('Precio: ' + documento.tipo.expediente.precio + '€', 30, 240);
    
    // GUARDAR PC
    doc.save(documento.nombre+'.pdf');
    

    // Guarda el PDF en formato binario
    const pdfBinary = doc.output('arraybuffer');

     // Convierte el ArrayBuffer en Blob
     const pdfBlob = new Blob([pdfBinary], { type: 'application/pdf' });

     // Crea un nuevo objeto de tipo File a partir del Blob
     const pdfFile = new File([pdfBlob], documento.nombre + '.pdf');
 
     // Asigna el archivo al campo archivo de documento
     documento.archivo = pdfFile;

    
  }


  
}
