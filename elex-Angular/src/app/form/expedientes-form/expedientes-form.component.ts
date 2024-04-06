import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ExpedientesService } from '../../services/expedientes/expedientes.service';

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
  private expedientesService = inject(ExpedientesService); //inyeccion de dependencias, inicializa el servicio
  private router = inject(Router);
  
}
