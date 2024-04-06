import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-actuaciones-form',
  standalone: true,
  imports: [  
    RouterLink,
    RouterOutlet,
    RouterModule,
    ReactiveFormsModule,
  ],
  templateUrl: './actuaciones-form.component.html',
  styleUrl: './actuaciones-form.component.css'
})
export class ActuacionesFormComponent {
  private fb = inject(FormBuilder);
}
