import { Component, OnInit, inject, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ExpedientesService } from '../../services/expedientes/expedientes.service';

import { TipoExpedienteService } from '../../services/tipo-expediente/tipo-expediente.service'; //Importar el Servicio de tipo de expediente
import { TipoExpedienteComponent } from "../../pages/tipo-expediente/tipo-expediente.component"; //Importar el Servicio adicional 
import { Tipo } from '../../services/tipo-expediente/tipo-response';
import { AsyncPipe } from '@angular/common';

import { NgFor, NgIf, NgForOf } from '@angular/common';
import { Expedientes } from '../../services/expedientes/expedientes-response';
import { Condicion } from '../../services/expedientes/expedientes-response';
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
        NgForOf,
        
        
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



  create(){
    if (this.form !== null ) {
      if (this.form.valid){

          // Declaración de la variable condicion
          let condicionConst: Condicion= Condicion.Confidencial;

          const condicionEnum: string | null | undefined = this.form.get('condicion')?.value;   // Asignar el valor del enum Condicion

          // Mapear la cadena de texto del formulario al valor del enum Condicion
          switch (condicionEnum) {
            case 'confidencial':
              condicionConst = Condicion.Confidencial;
              break;
            case 'en seguimiento':
              condicionConst = Condicion.EnSeguimiento;
              break;
            case 'urgente':
              condicionConst = Condicion.Urgente;
              break;
            default:
          }

          const expedientedato: Expedientes = { // Objeto con los datos del formulario
              id: 0,
              fecha: this.form.get('fecha')?.value ?? '',
              numero: this.form.get('numero')?.value ?? '',
              materia: this.form.get('materia')?.value ?? '',
              estado: this.form.get('estado')?.value ?? false,
              responsable: this.form.get('responsable')?.value ?? '',
              responsable2: this.form.get('responsable2')?.value ?? '',
              condicion: condicionConst, // Asignar el valor del enum Condicion
              consejeria: this.form.get('consejeria')?.value ?? '',
              precio: this.form.get('precio')?.value ?? 0,
              descripcion: this.form.get('descripcion')?.value ?? '',
              expediente: {  // Inicializa el objeto expediente dentro de expedientedato
                id: this.form.get('expediente.id')?.value ?? 0, // Si 'id' no es un número, asigna 0 como valor predeterminado
                nombre: this.form.get('expediente.nombre')?.value ?? '' // Si 'nombre' no es una cadena, asigna una cadena vacía como valor predeterminado
              }
          }
          
          console.log(expedientedato);
          /* this.expedientesService.createExpediente(expedientedato) // Pasamos los datos al Servicio
          .subscribe(()=>{
            this.router.navigate(['expedientes']);
            location.reload();
          }) */

      }
      else {console.error('El formulario no es válido');}

    } 
    else {console.error('El formulario es nulo');}
  }
}
