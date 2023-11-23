import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../core/model/user';
import { Observable } from 'rxjs';
import { IToken } from 'src/app/core/interfaces/itoken';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
   constructor(private http: HttpClient){}

  login(user: User): Observable<IToken>{
   return this.http.post<IToken>("http://localhost:8080/api/authenticate",user)
  }
  register(user: User): Observable<User>{
    return this.http.post<User>('http://localhost:8080/api/register',user)
  }

}
