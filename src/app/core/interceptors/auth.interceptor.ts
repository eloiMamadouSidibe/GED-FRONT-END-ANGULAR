import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/authentification/_service/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     const token = localStorage.getItem('token')
     const headers = new HttpHeaders().append('Authorization', `Bearer ${token}`);
     const modifiedRequest = request.clone({headers});
     return next.handle(modifiedRequest);

    
    
  
  }
}
