import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PdfViewerModule } from 'ng2-pdf-viewer'

@Component({
    selector: 'app-pdf',
    standalone: true,
    imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    PdfViewerModule
    ],
    templateUrl: './pdf.component.html',
    styleUrl: './pdf.component.css',
})
export class PdfComponent { }
