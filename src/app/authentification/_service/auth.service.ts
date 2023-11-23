import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   constructor(private route: Router){}
  saveToken(token: string): void{
      localStorage.setItem('token',token); 
      this.route.navigateByUrl('dashboard')

  }
  isLogged(): boolean{
    const token = localStorage.getItem('token')
    return !! token
  }

  isTokenExpired(): boolean {
    const token = localStorage.getItem('token');
    if (!token) {
      localStorage.clear
      return true;
    }
    const decodedToken = jwt_decode.jwtDecode(token);
    const expirationDate = decodedToken.exp;
    const currentDate = new Date().getTime() / 1000; // Convertir en secondes
    return expirationDate! < currentDate;
  }
  
  

}
