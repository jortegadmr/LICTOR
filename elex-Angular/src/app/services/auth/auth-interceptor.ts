import { HttpErrorResponse, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { catchError, throwError } from "rxjs";
import { LoginService } from "./login.service";
import { inject } from "@angular/core";

export const authInterceptor: HttpInterceptorFn = (req, next) =>{
  const jwtToken = getJwtToken();
  if (jwtToken){
    req.clone({
        setHeaders:{
            'Content-Type': 'application/json; charset=utf-8',
            'Accept':'application/json',
            'Authorization': `Bearer ${jwtToken}`,
        }
    })
  }
  return next(req);
}

 


function getJwtToken(){
    return sessionStorage.getItem('token');
}