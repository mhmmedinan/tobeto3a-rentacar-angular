import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { LocalStorageService } from "../../../features/services/concretes/local-storage.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
   constructor(private storageService:LocalStorageService){}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token =localStorage.getItem('token')
    console.log(token);
    let newRequest:HttpRequest<any>;
    newRequest=request.clone({
      setHeaders:{
        Authorization:`Bearer ${token}`,
        ContentType:"application/json"
      }
    })
    return next.handle(newRequest);
  }

}