import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

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
  private fb = inject(FormBuilder);
}
