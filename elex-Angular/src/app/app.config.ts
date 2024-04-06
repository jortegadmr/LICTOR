import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClient, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
/* import { JwtInterceptorService } from './services/auth/jwt-interceptor.service'; */
import { ErrorInterceptorService } from './services/auth/error-interceptor.service';

import { routes } from './app.routes';
import { authInterceptor } from './services/auth/auth-interceptor';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
    importProvidersFrom(HttpClient, HttpClientModule, ErrorInterceptorService /*, JwtInterceptorService */),
    
  ]
  
 
  
};

/*  HTTP_INTERCEPTORS */