import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink,  Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faCode, faBars, faHome, faFolder, faTasks, faArchive, faFileAlt  } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from '../../services/auth/login.service';

@Component({
  selector: 'app-header',
  standalone: true,

  /* importar los modulos que vayamos a utilizar  */

  imports: [
    CommonModule,
    RouterOutlet,
    FontAwesomeModule,
    
  ],

  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

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

constructor(private loginService: LoginService, private router: Router) {}
logout()
{
  this.loginService.logout();
  this.router.navigate(['/login']);

}

}
