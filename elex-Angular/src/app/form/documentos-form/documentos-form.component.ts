import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { AsyncPipe } from '@angular/common';

import { DocumentosService } from '../../services/documentos/documentos.service';
import { Documentos } from '../../services/documentos/documentos-response';

import { ActuacionesService } from '../../services/actuaciones/actuaciones.service';
import { ActuacioneNombre, Actuaciones, ExpedienteNombre } from '../../services/actuaciones/actuaciones-response';
import { ActuacionesComponent } from "../../pages/actuaciones/actuaciones.component";

import { ExpedientesService } from '../../services/expedientes/expedientes.service';  //Importar el Servicio de Expediente (TE)
import { ExpedientesComponent } from '../../pages/expedientes/expedientes.component'; //Importar el Servicio adicional   (TE)
import { Expedientes } from '../../services/expedientes/expedientes-response';  // Importar el Servicio Respuesta de Expediente (TE)
import { Condicion } from '../../services/expedientes/expedientes-response';  // Importar el Servicio Respuesta de Condicion (TE)

import { TipoExpedienteService } from '../../services/tipo-expediente/tipo-expediente.service'; //Importar el Servicio de tipo de expediente (TE)
import { TipoExpedienteComponent } from "../../pages/tipo-expediente/tipo-expediente.component"; //Importar el Servicio adicional   (TE)
import { Tipo } from '../../services/tipo-expediente/tipo-response'; // Importar el Servicio de tipo de expediente (TE)

@Component({
  selector: 'app-documentos-form',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    RouterModule,
    ReactiveFormsModule,
    AsyncPipe,
    ExpedientesComponent,
    TipoExpedienteComponent,
    ActuacionesComponent

  ],
  templateUrl: './documentos-form.component.html',
  styleUrl: './documentos-form.component.css'
})
export class DocumentosFormComponent implements OnInit {

  private fb = inject(FormBuilder);
  private docService = inject(DocumentosService); //inyeccion de dependencias, inicializa el servicio
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  public expedientesService = inject(ExpedientesService); //Inyeccion de dependencias, inicializa el servicio (TE)
  public tipoExpedienteService = inject(TipoExpedienteService); //Inyeccion de dependencias, inicializa el servicio de tipo de expediente (TE)
  public actuacionesService = inject(ActuacionesService); //Inyeccion de dependencias, inicializa el servicio (TE)

  expeDientes: Expedientes[] = []; // Guardamos los datos devueltos por el Servicio (TE)
  tiposExp: Tipo[] = []; // Guardamos los datos devueltos por el Servicio (TE)
  actuAciones: Actuaciones[] = []; // Guardamos los datos devueltos por el Servicio (TE)

  //PARA EL UPDATE
  form?: FormGroup;
  documentExiste?: Documentos;

  ngOnInit(): void {

    const documentoId = this.route.snapshot.paramMap.get('id');

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
    // RECIBIMOS LAS ACTUACIONES DEL SERVICIO
    this.actuacionesService.getActuaciones()
      .subscribe((actuaciones: any) => {
        console.log(actuaciones);
        this.actuAciones = actuaciones;
      })

    if (documentoId) {

      this.docService.getDocumento(parseInt(documentoId))
        .subscribe((documentos: Documentos) => {

          this.documentExiste = documentos
          console.log(this.documentExiste);

          // EL FORMULARIO

          this.form = this.fb.group({

            id: [documentos.id, [Validators.required]],
            nombre: [documentos.nombre, [Validators.required]],
            fecha: [documentos.fecha, [Validators.required]],
            descripcion: [documentos.descripcion, [Validators.required]],
            archivo: [documentos.archivo],
            tipo: this.fb.group({
              id: [documentos.tipo.id, [Validators.required]],
              nombre: [documentos.tipo.nombre, [Validators.required]],
              fecha: [documentos.tipo.fecha, [Validators.required]],
              descripcion: [documentos.tipo.descripcion, [Validators.required]],
              estado: [documentos.tipo.estado, [Validators.required]],
              expediente: this.fb.group({
                id: [documentos.tipo.expediente.id, [Validators.required]],
                fecha: [documentos.tipo.expediente.fecha, [Validators.required]],
                numero: [documentos.tipo.expediente.numero, [Validators.required]],
                materia: [documentos.tipo.expediente.materia, [Validators.required]],
                estado: [documentos.tipo.expediente.estado, [Validators.required]],
                responsable: [documentos.tipo.expediente.responsable, [Validators.required]],
                responsable2: [documentos.tipo.expediente.responsable2, [Validators.required]],
                descripcion: [documentos.tipo.expediente.descripcion, [Validators.required]],
                condicion: [documentos.tipo.expediente.condicion, [Validators.required]],
                precio: [documentos.tipo.expediente.precio, [Validators.required]],
                consejeria: [documentos.tipo.expediente.consejeria, [Validators.required]],
                expediente: this.fb.group({
                  id: [documentos.tipo.expediente.expediente.id, Validators.required],
                  nombre: [documentos.tipo.expediente.expediente.nombre, Validators.required],
                })
              })
            })
          })
        });
    } else {
      this.form = this.fb.group({

        id: [null, [Validators.required]],
        nombre: ['', [Validators.required]],
        fecha: ['', [Validators.required]],
        descripcion: ['', [Validators.required]],
        archivo: [''],
        tipo: this.fb.group({
          id: [null, [Validators.required]],
          nombre: ['', [Validators.required]],
          fecha: ['', [Validators.required]],
          descripcion: ['', [Validators.required]],
          estado: [false, [Validators.required]],
          expediente: this.fb.group({
            id: [null, [Validators.required]],
            fecha: ['', [Validators.required]],
            numero: ['', [Validators.required]],
            materia: ['', [Validators.required]],
            estado: [false, [Validators.required]],
            responsable: ['', [Validators.required]],
            responsable2: [null],
            descripcion: ['', [Validators.required]],
            condicion: ['', [Validators.required]],
            precio: [null, [Validators.required]],
            consejeria: ['', [Validators.required]],
            expediente: this.fb.group({
              id: [null, [Validators.required]],
              nombre: ['', [Validators.required]],
            }),
          })
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

        const documentoDato = { // Documentos (formato)
          id: 0,
          nombre: this.form.get('nombre')?.value ?? '',
          fecha: this.form.get('fecha')?.value ?? '',
          descripcion: this.form.get('descripcion')?.value ?? '',
          archivo: new Blob,//que ponemos aqui?          
          // Tipo (formato)
          tipo: {
            id: this.form.get('tipo.id')?.value ?? 0,
            nombre: this.form.get('tipo.nombre')?.value ?? '',
            fecha: this.form.get('tipo.fecha')?.value ?? '',
            descripcion: this.form.get('tipo.descripcion')?.value ?? '',
            estado: this.form.get('tipo.estado')?.value ?? false,
            // TipoExpediente (formato)
            expediente: {
              id: this.form.get('tipo.expediente.id')?.value ?? 0,
              fecha: this.form.get('tipo.expediente.fecha')?.value ?? '',
              numero: this.form.get('tipo.expediente.numero')?.value ?? '',
              materia: this.form.get('tipo.expediente.materia')?.value ?? '',
              estado: this.form.get('tipo.expediente.estado')?.value ?? false,
              responsable: this.form.get('tipo.expediente.responsable')?.value ?? '',
              responsable2: this.form.get('tipo.expediente.responsable2')?.value ?? '',
              descripcion: this.form.get('tipo.expediente.descripcion')?.value ?? '',
              condicion: this.form.get('tipo.expediente.condicion')?.value ?? '',
              precio: this.form.get('tipo.expediente.precio')?.value ?? 0,
              consejeria: this.form.get('tipo.expediente.consejeria')?.value ?? '',
              // ExpedienteExpediente (formato)
              expediente: {
                id: this.form.get('tipo.expediente.expediente.id')?.value ?? 0,
                nombre: this.form.get('tipo.expediente.expediente.nombre')?.value ?? '',
              }
            }
          }
        }

        if(this.documentExiste){

          this.docService.updateDocumento(this.documentExiste.id ,documentoDato)
          .subscribe((resp: any) => {
            console.log(resp);
            alert("Se ha actualizado correctamente el Documento");
            this.router.navigate(['documentos']).then(() => {
              window.location.reload();
            })
          });

        }else{

          this.docService.createDocumento(documentoDato)
          .subscribe((resp: any) => {
            console.log(resp);
            alert("Se ha creado correctamente el Documento");
            this.router.navigate(['documentos']).then(() => {
              window.location.reload();
            })
          });

        }
      }
      else { console.error('El formulario no es válido'); }
    }
    else { console.error('El formulario es nulo'); }
    this.form!.markAllAsTouched();
    alert("Rellene el formulario correctamente");
  }
}
