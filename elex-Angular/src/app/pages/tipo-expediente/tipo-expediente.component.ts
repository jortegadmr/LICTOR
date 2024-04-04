import { Component, OnInit, inject } from '@angular/core';
import { TipoExpedienteService } from '../../services/tipo-expediente/tipo-expediente.service';

@Component({
  selector: 'app-tipo-expediente',
  standalone: true,
  imports: [],
  templateUrl: './tipo-expediente.component.html',
  styleUrl: './tipo-expediente.component.css'
})
export class TipoExpedienteComponent implements OnInit {
  private tipoExpedienteService = inject(TipoExpedienteService);

  ngOnInit(): void {
      this.tipoExpedienteService.list()
      .subscribe(tipoExpediente => {
        console.log(tipoExpediente);
      });
  }
}
