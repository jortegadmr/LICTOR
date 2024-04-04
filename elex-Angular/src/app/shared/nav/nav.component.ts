import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faCode, faBars, faHome, faFolder, faTasks, faArchive, faFileAlt  } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from '../../services/auth/login.service';


@Component({
  selector: 'app-nav',
  standalone: true,

  /* importar los modulos que vayamos a utilizar  */
  
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    FontAwesomeModule,
  ],

  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  userLoginOn: boolean = false;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    // Suscribirse al BehaviorSubject para recibir actualizaciones del estado de inicio de sesión
    this.loginService.currentUserLoginOn.subscribe((loggedIn: boolean) => {
      // Actualizar el estado userLoginOn
      this.userLoginOn = loggedIn;
    });
  }

  /* ICONOS FONTAWESOME  */
  faUser = faUser;
  faCode = faCode;
  faBars = faBars;
  faHome = faHome;
  faFolder = faFolder;
  faTasks = faTasks;
  faArchive = faArchive;
  faFileAlt = faFileAlt;
/* -----------------------  */

}
