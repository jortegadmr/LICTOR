import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { AsyncPipe } from '@angular/common';

import { ActuacionesService } from '../../services/actuaciones/actuaciones.service';
import { ActuacioneNombre, Actuaciones, ExpedienteNombre } from '../../services/actuaciones/actuaciones-response';

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

export class ActuacionesFormComponent implements OnInit {

  private fb = inject(FormBuilder);
  private actuacionesService = inject(ActuacionesService); //Inyeccion de dependencias, inicializa el servicio
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  public expedientesService = inject(ExpedientesService); //Inyeccion de dependencias, inicializa el servicio (TE)
  public tipoExpedienteService = inject(TipoExpedienteService); //Inyeccion de dependencias, inicializa el servicio de tipo de expediente (TE)

  expeDientes: Expedientes[] = []; // Guardamos los datos devueltos por el Servicio (TE)
  tiposExp: Tipo[] = []; // Guardamos los datos devueltos por el Servicio (TE)

  //PARA EL UPDATE
  form?: FormGroup;
  actuacionesExiste?: Actuaciones;


  ngOnInit(): void {

    const actuacionesId = this.route.snapshot.paramMap.get('id');

    if (actuacionesId) {

      this.actuacionesService.getActuacion(parseInt(actuacionesId))
        .subscribe((actuaciones: any) => {

          this.actuacionesExiste = actuaciones

          // EL FORMULARIO
          this.form = this.fb.group({


            id: [null, [Validators.required]], // Puede ser nulo o un número
            nombre: ['', [Validators.required]], // Cadena de texto
            fecha: ['', [Validators.required]], // tipo fecha
            descripcion: ['', [Validators.required]],
            estado: [false, [Validators.required]], // Booleano
            expediente: this.fb.group({
              id: [null, [Validators.required]], // Puede ser nulo o un número
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
        })

      // RECIBIMOS LOS EXPEDIENTES DEL SERVICIO
      this.expedientesService.getExpedientes()
        .subscribe((expedientes: any) => {
          console.log(expedientes);
          this.expeDientes = expedientes;
        });
      // RECIBIMOS LOS TIPOS DE EXPEDIENTES DEL SERVICIO
      this.tipoExpedienteService.getTipoExpediente()
        .subscribe((tipos: any) => {
          console.log(tipos);
          this.tiposExp = tipos;
        });
    } else {

      this.form = this.fb.group({
        id: [null, [Validators.required]], // Puede ser nulo o un número
        nombre: ['', [Validators.required]], // Cadena de texto
        fecha: ['', [Validators.required]], // tipo fecha
        descripcion: ['', [Validators.required]],
        estado: [false, [Validators.required]], // Booleano
        expediente: this.fb.group({
          id: [null, [Validators.required]], // Puede ser nulo o un número
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
  }
  console() {
    console.log(this.form!.value);
  }



  create() {
    if (this.form !== null) {
      if (this.form) {

        // Declaración de la variable condicion
        let nombreConst: ActuacioneNombre = ActuacioneNombre.CitacionYEmplazamiento; // ENUM del RESPONSE tienen que coincidir los nombres
        let condicionConst: Condicion = Condicion.Confidencial; // ENUM del RESPONSE tienen que coincidir los nombres
        let constNombre: ExpedienteNombre = ExpedienteNombre.Asi; // ENUM del RESPONSE tienen que coincidir los nombres

        const nombreEnum: string | null | undefined = this.form.get('nombre')?.value;   // Asignar el valor del enum Condicion
        const condicionEnum: string | null | undefined = this.form.get('condicion')?.value;   // Asignar el valor del enum Condicion
        const constEnum: string | null | undefined = this.form.get('expediente.nombre')?.value;   // Asignar el valor del enum Condicion

        // Mapear la cadena de texto del formulario al valor del enum Condicion
        switch (nombreEnum) {
          case 'Citacion y emplazamiento':
            nombreConst = ActuacioneNombre.CitacionYEmplazamiento;
            break;
          case 'Declaraciones':
            nombreConst = ActuacioneNombre.Declaraciones;
            break;
          case 'Informes':
            nombreConst = ActuacioneNombre.Informes;
            break;
          case 'Notificaciones':
            nombreConst = ActuacioneNombre.Notificaciones;
            break;
          case 'Resoluciones judiciales':
            nombreConst = ActuacioneNombre.ResolucionesJudiciales;
            break;
          default:
        }

        // Mapear la cadena de texto del formulario al valor del enum Condicion IF
        if (condicionEnum !== null && condicionEnum !== undefined) {
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
              // Manejar el caso en que el valor del formulario no coincide con ningún valor del enum
              break;
          }
        }

        // Mapear la cadena de texto del formulario al valor del enum Condicion IF

        if (constEnum !== null && constEnum !== undefined) {
          switch (constEnum) {
            case 'ASI':
              constNombre = ExpedienteNombre.Asi;
              break;
            case 'INF':
              constNombre = ExpedienteNombre.Inf;
              break;
            case 'JUD':
              constNombre = ExpedienteNombre.Jud;
              break;
            case 'MO':
              constNombre = ExpedienteNombre.Mo;
              break;
            default:
              // Manejar el caso en que el valor del formulario no coincide con ningún valor del enum
              break;
          }
        }


        const actuacionDato: Actuaciones = {
          id: 0,
          nombre: nombreConst, // ENUM
          fecha: this.form.get('fecha')?.value ?? '',
          descripcion: this.form.get('descripcion')?.value ?? '',
          estado: this.form.get('estado')?.value ?? false,
          expediente: {
            id: this.form.get('expediente.id')?.value ?? 0,
            fecha: this.form.get('expediente.fecha')?.value ?? '',
            numero: this.form.get('expediente.numero')?.value ?? '',
            materia: this.form.get('expediente.materia')?.value ?? '',
            estado: this.form.get('expediente.estado')?.value ?? false,
            responsable: this.form.get('expediente.responsable')?.value ?? '',
            responsable2: this.form.get('expediente.responsable2')?.value ?? null,
            descripcion: this.form.get('expediente.descripcion')?.value ?? '',
            condicion: condicionConst, // otro ENUM
            precio: this.form.get('expediente.precio')?.value ?? 0,
            consejeria: this.form.get('expediente.consejeria')?.value ?? '',
            expediente: {
              id: this.form.get('expediente.expediente.id')?.value ?? 0,
              nombre: constNombre //  otro ENUM
            }
          }
        }

        if (this.actuacionesExiste) {

          this.actuacionesService.updateActuacion(this.actuacionesExiste.id, actuacionDato)
            .subscribe(() => {

              console.log("Se ha creado correctamente la Actuacion");
              alert("Se ha creado correctamente la Actuacion");
              this.router.navigate(['/actuaciones']).then(() => {
                window.location.reload();
              })
            })

        } else {
          this.actuacionesService.createActuacion(actuacionDato)
            .subscribe(() => {

              console.log("Se ha creado correctamente la Actuacion");
              alert("Se ha creado correctamente la Actuacion");
              this.router.navigate(['/actuaciones']).then(() => {
                window.location.reload();
              })
            })

        }
      }
      else { console.error('El formulario no es válido'); }
    }
    else { console.error('El formulario es nulo'); }
  }
}