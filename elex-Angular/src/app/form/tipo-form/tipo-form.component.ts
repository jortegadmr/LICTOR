import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tipo-form',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './tipo-form.component.html',
  styleUrl: './tipo-form.component.css'
})
export class TipoFormComponent {

}
