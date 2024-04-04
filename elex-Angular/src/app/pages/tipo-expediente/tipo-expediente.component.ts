import { Component, OnInit, inject } from '@angular/core';
/* import { TipoExpedienteService } from '../../services/tipo-expediente/tipo-expediente.service'; */
import { LoginService } from '../../services/auth/login.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tipo-expediente',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './tipo-expediente.component.html',
  styleUrl: './tipo-expediente.component.css'
})
export class TipoExpedienteComponent implements OnInit {
  userLoginOn: boolean = false;
  constructor(private loginService: LoginService){}
  

  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe({
      next: (userLoginOn) => {
        this.userLoginOn = userLoginOn;
        if (!this.userLoginOn) { 
          //condicion dirigir al login
          console.log('no hay sesión iniciada');
        }
      }
    });
  }
}
