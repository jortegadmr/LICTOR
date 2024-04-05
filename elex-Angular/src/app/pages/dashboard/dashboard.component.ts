import { Component, inject } from '@angular/core';
import { UsersService } from '../../services/Users.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  public usersService = inject (UsersService);
  
  
}