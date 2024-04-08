import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared/header/header.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { NavComponent } from './shared/nav/nav.component';
import { NgFor, NgIf, NgForOf } from '@angular/common';
import { PdfViewerModule } from 'ng2-pdf-viewer';



@Component({
  selector: 'app-root',
  standalone: true,

  /* importar los modulos que vayamos a utilizar  */

  imports: [
    RouterOutlet,
    RouterLink,
    RouterModule,
    CommonModule,
    HeaderComponent,
    DashboardComponent,
    FontAwesomeModule,
    NavComponent,
    NgFor,
    NgIf,
    NgForOf,
    PdfViewerModule,
 
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'elex-Angular';
  faCoffee = faCoffee;
}
