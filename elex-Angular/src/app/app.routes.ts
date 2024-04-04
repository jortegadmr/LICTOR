import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { TipoExpedienteComponent } from './pages/tipo-expediente/tipo-expediente.component';
import { ActuacionesComponent } from './pages/actuaciones/actuaciones.component';
import { DocumentosComponent } from './pages/documentos/documentos.component';
import { ExpedientesComponent } from './pages/expedientes/expedientes.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    /* ---Definimos las Rutas--- */
    
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    
    
    { path: 'inicio', component: DashboardComponent, canActivate: [authGuard] },
    { path: 'login', component: LoginComponent },

    { path: 'tipo-expediente', component: TipoExpedienteComponent, canActivate: [authGuard] },
    { path: 'actuaciones', component:ActuacionesComponent, canActivate: [authGuard] },
    { path: 'documentos', component: DocumentosComponent, canActivate: [authGuard] },
    { path: 'expedientes', component: ExpedientesComponent, canActivate: [authGuard]},

];
