import { Component, OnInit, inject } from '@angular/core';
import { TipoExpedienteComponent } from '../tipo-expediente/tipo-expediente.component';
import { TipoExpedienteService } from '../../services/tipo-expediente/tipo-expediente.service';
import { Tipo } from '../../services/tipo-expediente/tipo-response';
import { AsyncPipe } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ModalComponent } from "../../shared/modal/modal.component";


@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [
        RouterLink,
        RouterOutlet,
        AsyncPipe,
        TipoExpedienteComponent,
        ModalComponent
    ]
})
export class DashboardComponent {}
