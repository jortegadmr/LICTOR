import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-expedientes-form',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './expedientes-form.component.html',
  styleUrl: './expedientes-form.component.css'
})
export class ExpedientesFormComponent {

}
