import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-expedientes-form',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    RouterModule,
    ReactiveFormsModule,
    
  ],
  templateUrl: './expedientes-form.component.html',
  styleUrl: './expedientes-form.component.css'
})
export class ExpedientesFormComponent {

}
