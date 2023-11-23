import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "src/app/authentification/_service/auth.service";

@Injectable({
  providedIn: 'root'
})
export class authentificationGuard implements CanActivate{
  constructor(private authService: AuthService, private route: Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Promise<boolean | UrlTree> | boolean {
    
    let isLogged = this.authService.isLogged();
    let isTokenExpired = this.authService.isTokenExpired();

    if(isLogged && !isTokenExpired){
      return true;
    }
         
      return this.route.navigate(['user/login']);
  }
}

