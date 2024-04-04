import { Component, OnInit, inject } from '@angular/core';
/* import { TipoExpedienteService } from '../../services/tipo-expediente/tipo-expediente.service'; */
import { LoginService } from '../../services/auth/login.service';


@Component({
  selector: 'app-tipo-expediente',
  standalone: true,
  imports: [],
  templateUrl: './tipo-expediente.component.html',
  styleUrl: './tipo-expediente.component.css'
})
export class TipoExpedienteComponent implements OnInit {
  userLoginOn: boolean = false;
  constructor(private loginService: LoginService){}
  

  ngOnInit(): void {
      this.loginService.currentUserLoginOn.subscribe(
        {
          next:(userLoginOn)=>{
            this.userLoginOn=userLoginOn;
          }
        }
      )
  }
}
