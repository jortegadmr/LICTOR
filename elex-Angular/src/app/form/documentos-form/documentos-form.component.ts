import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-documentos-form',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './documentos-form.component.html',
  styleUrl: './documentos-form.component.css'
})
export class DocumentosFormComponent {

}
