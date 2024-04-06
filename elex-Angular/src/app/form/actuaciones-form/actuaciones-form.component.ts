import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-actuaciones-form',
  standalone: true,
  imports: [  
    RouterLink,
    RouterOutlet,
    RouterModule,
  ],
  templateUrl: './actuaciones-form.component.html',
  styleUrl: './actuaciones-form.component.css'
})
export class ActuacionesFormComponent {

}
