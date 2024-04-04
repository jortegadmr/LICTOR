import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { TipoExpedienteComponent } from './pages/tipo-expediente/tipo-expediente.component';
import { ActuacionesComponent } from './pages/actuaciones/actuaciones.component';
import { DocumentosComponent } from './pages/documentos/documentos.component';
import { ExpedientesComponent } from './pages/expedientes/expedientes.component';

export const routes: Routes = [
    /* ---Definimos las Rutas--- */
    
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    
    
    { path: 'inicio', component: DashboardComponent },
    { path: 'login', component: LoginComponent },

    { path: 'tipo-expediente', component: TipoExpedienteComponent },
    { path: 'actuaciones', component:ActuacionesComponent },
    { path: 'documentos', component: DocumentosComponent },
    { path: 'expedientes', component: ExpedientesComponent},

];
