import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tipo-form',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    RouterModule,
    ReactiveFormsModule,
  ],
  templateUrl: './tipo-form.component.html',
  styleUrl: './tipo-form.component.css'
})
export class TipoFormComponent {
  private fb = inject(FormBuilder);

  form = this.fb.group({
    nombre: ['', [Validators.required]],
  })

  create(){

    console.log(this.form.value)
  }



}
