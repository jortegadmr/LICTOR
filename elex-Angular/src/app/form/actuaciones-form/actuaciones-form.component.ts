import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { AsyncPipe } from '@angular/common';

import { ActuacionesService } from '../../services/actuaciones/actuaciones.service';
import { Actuaciones } from '../../services/actuaciones/actuaciones-response';

import { ExpedientesService } from '../../services/expedientes/expedientes.service';  //Importar el Servicio de Expediente (TE)
import { ExpedientesComponent } from '../../pages/expedientes/expedientes.component'; //Importar el Servicio adicional   (TE)
import { Expedientes } from '../../services/expedientes/expedientes-response';  // Importar el Servicio Respuesta de Expediente (TE)
import { Condicion } from '../../services/expedientes/expedientes-response';  // Importar el Servicio Respuesta de Condicion (TE)

import { TipoExpedienteService } from '../../services/tipo-expediente/tipo-expediente.service'; //Importar el Servicio de tipo de expediente (TE)
import { TipoExpedienteComponent } from "../../pages/tipo-expediente/tipo-expediente.component"; //Importar el Servicio adicional   (TE)
import { Tipo } from '../../services/tipo-expediente/tipo-response'; // Importar el Servicio de tipo de expediente (TE)

@Component({
  selector: 'app-actuaciones-form',
  standalone: true,
  imports: [  
    RouterLink,
    RouterOutlet,
    RouterModule,
    ReactiveFormsModule,
    AsyncPipe,
    ExpedientesComponent,
    TipoExpedienteComponent,
   

  ],
  templateUrl: './actuaciones-form.component.html',
  styleUrl: './actuaciones-form.component.css'
})

export class ActuacionesFormComponent implements OnInit{

  private fb = inject(FormBuilder);
  private actuacionesService = inject(ActuacionesService); //Inyeccion de dependencias, inicializa el servicio
  private router = inject(Router);

  public expedientesService = inject(ExpedientesService); //Inyeccion de dependencias, inicializa el servicio (TE)
  public tipoExpedienteService = inject(TipoExpedienteService); //Inyeccion de dependencias, inicializa el servicio de tipo de expediente (TE)

  expeDientes: Expedientes[] = []; // Guardamos los datos devueltos por el Servicio (TE)
  tiposExp: Tipo[]=[]; // Guardamos los datos devueltos por el Servicio (TE)



  ngOnInit(): void {
    // RECIBIMOS LOS EXPEDIENTES DEL SERVICIO
    this.expedientesService.getExpedientes()
    .subscribe( (expedientes: any) =>{
      console.log(expedientes);
      this.expeDientes=expedientes;
    });
    // RECIBIMOS LOS TIPOS DE EXPEDIENTES DEL SERVICIO
    this.tipoExpedienteService.getTipoExpediente()
    .subscribe( (tipos: any) =>{  
      console.log(tipos);
      this.tiposExp=tipos;
    });
  }

  console(){
    console.log(this.form.value);
  }

  form = this.fb.group({
    // EL FORMULARIO

    id: [null, [Validators.required]], // Puede ser nulo o un número
    nombre: ['', [Validators.required]], // Cadena de texto
    fecha: ['', [Validators.required]], // tipo fecha
    descripcion: ['', [Validators.required]],
    estado: [false, [Validators.required]], // Booleano
    expediente: this.fb.group({
      id: [null, [Validators.required]], // Puede ser nulo o un número
      nombre: ['', [Validators.required]], // Cadena de texto
      fecha: ['', [Validators.required]], // tipo fecha
      numero: ['', [Validators.required]],
      materia: ['', [Validators.required]],
      estado: [false, [Validators.required]], // Booleano
      responsable: ['', [Validators.required]],
      responsable2: [null],
      descripcion: ['', [Validators.required]],
      condicion: ['', [Validators.required]],
      precio: [0, [Validators.required]], // Numero
      consejeria: ['', [Validators.required]],
      expediente: this.fb.group({
        id: [null, [Validators.required]], // Puede ser nulo o un número
        nombre: ['', [Validators.required]] // Cadena de texto
        }),
    })
})



}
