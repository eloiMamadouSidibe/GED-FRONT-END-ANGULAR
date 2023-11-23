import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
   constructor(private http: HttpClient){}
   private url: string = 'http://localhost:8080/api/admin/users'
  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.url}`)
  }
  getUserPaginate(page: number, size: number): Observable<User[]>{
    const params = new HttpParams().set('page',page.toString()).set('size',size.toString());
    return this.http.get<User[]>(`${this.url}`,{params})
  }

  getUser(login: string): Observable<User>{
    return this.http.get<User>(`${this.url}/${login}`)
  }

  deleteUser(login: string): Observable<User>{
    return this.http.delete<User>(`${this.url}/${login}`)
  }

  updateUser(user: User): Observable<User>{
    return this.http.put<User>(this.url,user)

  }
}
