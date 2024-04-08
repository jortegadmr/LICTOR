import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { TipoExpedienteComponent } from './pages/tipo-expediente/tipo-expediente.component';
import { ActuacionesComponent } from './pages/actuaciones/actuaciones.component';
import { DocumentosComponent } from './pages/documentos/documentos.component';
import { ExpedientesComponent } from './pages/expedientes/expedientes.component';
import { authGuard } from './guards/auth.guard';

import { TipoFormComponent } from './form/tipo-form/tipo-form.component';
import { DocumentosFormComponent } from './form/documentos-form/documentos-form.component';
import { ActuacionesFormComponent } from './form/actuaciones-form/actuaciones-form.component';
import { ExpedientesFormComponent } from './form/expedientes-form/expedientes-form.component';

export const routes: Routes = [
    /* ---Definimos las Rutas--- */
    
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    
    
    { path: 'inicio', component: DashboardComponent, canActivate: [authGuard] },
    { path: 'login', component: LoginComponent },

    { path: 'tipo-expediente', component: TipoExpedienteComponent, canActivate: [authGuard], 
        children: [
            { 
                path: 'tipo-form', 
                component: TipoFormComponent, 
            },
            { 
                path: ':id/:nombre', 
                component: TipoFormComponent, 
            },
        ]
     },
    
    { path: 'actuaciones', component:ActuacionesComponent, canActivate: [authGuard],
        children: [
            { 
                path: 'actuaciones-form', 
                component: ActuacionesFormComponent,
            },
            {
                path: ':id', 
                component: ActuacionesFormComponent,
            }
        ]
     },

    { path: 'documentos', component: DocumentosComponent, canActivate: [authGuard],
        children: [
            { 
                path: 'documentos-form', 
                component: DocumentosFormComponent, 
            },
            {
                path: ':id', 
                component: DocumentosFormComponent,
            }
        ]
     },

    { path: 'expedientes', component: ExpedientesComponent, canActivate: [authGuard],
        children: [
            { 
                path: 'expedientes-form', 
                component: ExpedientesFormComponent,
             },
            {
                path: ':id', 
                component: ExpedientesFormComponent,
            }
        ]
    },

];
