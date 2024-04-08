import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    ModalComponent
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

}
