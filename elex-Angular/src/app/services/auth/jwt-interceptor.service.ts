import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor {

  private loginService = inject (LoginService)

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token:String=this.loginService.userToken;

    console.log('TIENEE QUE APARECER EL TOKEN AQUI', token);

    if(token!=""){
      req=req.clone(
        {
          setHeaders:{
            'Content-Type': 'application/json; charset=utf-8',
            'Accept':'application/json',
            'Authorization': `Bearer ${token}`,

          },
        }
      )
    }

    return next.handle(req);
  }
}
