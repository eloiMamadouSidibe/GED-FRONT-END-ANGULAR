import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../model/user";

@Injectable({
    providedIn: 'root'
})
export class UserConnectedService{
   private url = "http://localhost:8080/api/account"
    constructor(private http: HttpClient){}
    //retourne l'utilisateur connecter
    getUserConnected(): Observable<User>{
        return this.http.get<User>(this.url)
    }

}