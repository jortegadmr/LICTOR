import { Component, OnInit, inject, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ExpedientesService } from '../../services/expedientes/expedientes.service';

import { TipoExpedienteService } from '../../services/tipo-expediente/tipo-expediente.service'; //Importar el Servicio de tipo de expediente
import { TipoExpedienteComponent } from "../../pages/tipo-expediente/tipo-expediente.component"; //Importar el Servicio adicional 
import { Tipo } from '../../services/tipo-expediente/tipo-response';
import { AsyncPipe } from '@angular/common';

import { NgFor, NgIf, NgForOf } from '@angular/common';
@Component({
    selector: 'app-expedientes-form',
    standalone: true,
    templateUrl: './expedientes-form.component.html',
    styleUrl: './expedientes-form.component.css',
    imports: [
        RouterLink,
        RouterOutlet,
        RouterModule,
        ReactiveFormsModule,
        TipoExpedienteComponent,
        AsyncPipe,
        NgFor,
        NgIf,
        NgForOf
        
    ]
})
export class ExpedientesFormComponent implements OnInit {

  private fb = inject(FormBuilder);
  private expedientesService = inject(ExpedientesService); //Inyeccion de dependencias, inicializa el servicio
  private router = inject(Router);

  public tipoExpedienteService = inject(TipoExpedienteService); //Inyeccion de dependencias, inicializa el servicio de tipo de expediente (adicional)

  form = this.fb.group({
    // EL FORMULARIO
    expediente: this.fb.group({
      id: [null, [Validators.required]], // Puede ser nulo o un número
      nombre: ['', [Validators.required]] // Cadena de texto
    }),
    fecha: ['', [Validators.required]], // tipo fecha
    numero: ['', [Validators.required]],
    materia: ['', [Validators.required]],
    estado: [false, [Validators.required]], // Booleano
    responsable: ['', [Validators.required]],
    responsable2: [null],
    condicion: ['', [Validators.required]],
    consejeria: ['', [Validators.required]],
    precio: [0, [Validators.required]], // Numero
    descripcion: ['', [Validators.required]],
  })

  tiposExp: Tipo[]=[]; // Guardamos los datos devueltos por el Servicio
  ngOnInit(): void {
    // RECIBIMOS LOS TIPOS DE EXPEDIENTES DEL SERVICIO
    // Tenemos que añadirlos al formulario en el Select
    this.tipoExpedienteService.getTipoExpediente()
    .subscribe( (tipos: any) =>{  
      console.log(tipos);
      this.tiposExp=tipos;
    });
  }

  console(){

    console.log(this.form.value);
  }



}
