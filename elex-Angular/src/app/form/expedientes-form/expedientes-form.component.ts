import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ExpedientesService } from '../../services/expedientes/expedientes.service';

import { TipoExpedienteService } from '../../services/tipo-expediente/tipo-expediente.service'; //Importar el Servicio de tipo de expediente (TE)
import { TipoExpedienteComponent } from "../../pages/tipo-expediente/tipo-expediente.component"; //Importar el Servicio adicional   (TE)
import { Tipo } from '../../services/tipo-expediente/tipo-response'; // Importar el Servicio de tipo de expediente (TE)
import { AsyncPipe } from '@angular/common';


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

    ]
})
export class ExpedientesFormComponent implements OnInit {

  private fb = inject(FormBuilder);
  private expedientesService = inject(ExpedientesService); //Inyeccion de dependencias, inicializa el servicio
  private router = inject(Router);
  private route = inject (ActivatedRoute);

  public tipoExpedienteService = inject(TipoExpedienteService); //Inyeccion de dependencias, inicializa el servicio de tipo de expediente ((TE))

  

  form?: FormGroup;
  expedienteExiste?: Expedientes;

  tiposExp: Tipo[]=[]; // Guardamos los datos devueltos por el Servicio (TE)
  ngOnInit(): void {

   const idExpediente = this.route.snapshot.paramMap.get('id');
   
   this.tipoExpedienteService.getTipoExpediente()
   .subscribe( (tipos: any) =>{  
     console.log(tipos);
     this.tiposExp=tipos;
       });
    if (idExpediente){

      this.expedientesService.getExpediente(parseInt(idExpediente))
      .subscribe( (expediente: Expedientes) =>{

            this.expedienteExiste = expediente

            // EL FORMULARIO
           this.form = this.fb.group({
           
            expediente: this.fb.group({
              id: [expediente.expediente.id, [Validators.required]], // Puede ser nulo o un número
              nombre: [expediente.expediente.nombre, [Validators.required]] // Cadena de texto
            }),
            fecha: [expediente.fecha, [Validators.required]], // tipo fecha
            numero: [expediente.numero, [Validators.required]],
            materia: [expediente.materia, [Validators.required]],
            estado: [expediente.estado, [Validators.required]], // Booleano
            responsable: [expediente.responsable, [Validators.required]],
            responsable2: [expediente.responsable2],
            condicion: [expediente.condicion, [Validators.required]],
            consejeria: [expediente.consejeria, [Validators.required]],
            precio: [expediente.precio, [Validators.required]], // Numero
            descripcion: [expediente.descripcion, [Validators.required]],
           })
        })

    // RECIBIMOS LOS TIPOS DE EXPEDIENTES DEL SERVICIO
    // Tenemos que añadirlos al formulario en el Select
    
      }else{

          this.form = this.fb.group({
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
      }
    } 

    console (){
      console.log(this.form!.value);
    }


  create(){

    if (this.form !== null ) {
      if (this.form!.valid){

          // Declaración de la variable condicion
          let condicionConst: Condicion= Condicion.Confidencial;

          const condicionEnum: string | null | undefined = this.form!.get('condicion')?.value;   // Asignar el valor del enum Condicion

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
              fecha: this.form!.get('fecha')?.value ?? '',
              numero: this.form!.get('numero')?.value ?? '',
              materia: this.form!.get('materia')?.value ?? '',
              estado: this.form!.get('estado')?.value ?? false,
              responsable: this.form!.get('responsable')?.value ?? '',
              responsable2: this.form!.get('responsable2')?.value ?? '',
              condicion: condicionConst, // Asignar el valor del enum Condicion
              consejeria: this.form!.get('consejeria')?.value ?? '',
              precio: this.form!.get('precio')?.value ?? 0,
              descripcion: this.form!.get('descripcion')?.value ?? '',
              expediente: {  // Inicializa el objeto expediente dentro de expedientedato
                id: this.form!.get('expediente.id')?.value ?? 0, // Si 'id' no es un número, asigna 0 como valor predeterminado
                nombre: this.form!.get('expediente.nombre')?.value ?? '' // Si 'nombre' no es una cadena, asigna una cadena vacía como valor predeterminado
              }
          }
          
          if(this.expedienteExiste){
            console.log(expedientedato);
          this.expedientesService.updateExpediente(this.expedienteExiste.id, expedientedato) // Pasamos los datos al Servicio
          .subscribe(()=>{
            
            console.log("Se ha actualizado correctamente el expediente");
            alert("Se ha actualizado correctamente el expediente");
           
              this.router.navigate(['expedientes']).then(() => {
                window.location.reload();
              })
          })

          }else {
            console.log(expedientedato);
          this.expedientesService.createExpediente(expedientedato) // Pasamos los datos al Servicio
          .subscribe(()=>{
           
            console.log("Se ha creado correctamente el expediente");
            alert("Se ha creado correctamente el expediente");
           
            this.router.navigate(['expedientes']).then(() => {
              window.location.reload();
            })
          })
          }
          

      }
      else {console.error('El formulario no es válido');}
      

    } 
    else {console.error('El formulario es nulo');}
    
  }
}
