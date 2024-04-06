import { Component, OnInit, inject } from '@angular/core';
import { UsersService } from '../../services/Users.service';
import { TipoExpedienteComponent } from '../tipo-expediente/tipo-expediente.component';
import { TipoExpedienteService } from '../../services/tipo-expediente/tipo-expediente.service';
import { Observable } from 'rxjs';
import { Tipo, TipoResponse } from '../../services/tipo-expediente/tipo-response';
import { AsyncPipe } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [
        RouterLink,
        RouterOutlet,
        AsyncPipe,
        TipoExpedienteComponent
    ]
})
export class DashboardComponent implements OnInit {
  public tipoResult$!: Observable <TipoResponse>
  public tipoR$!: Observable <Tipo>

  public tipoExpedienteService = inject (TipoExpedienteService);
  public usersService = inject (UsersService);

  /* tipos: Tipo[] = []; */
  tipos: any[]=[];
  
  ngOnInit(): void {

    this.tipoExpedienteService.getTipoExpediente().subscribe( (tipos: any) =>{
      console.log(tipos);
      this.tipos=tipos;
    });
      
    


     /*  this.tipoResult$ = this.tipoExpedienteService.getTipoExpediente();
      this.tipoResult$.subscribe((data:TipoResponse)=>{
        console.log(data); */
      
  }
}