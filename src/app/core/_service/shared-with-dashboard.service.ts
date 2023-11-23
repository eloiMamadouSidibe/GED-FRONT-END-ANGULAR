import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedWithDashboardService{
   
 constructor(private http: HttpClient){}

  get(url: string): Observable<any>{
    return this.http.get<any>(url)
  }
   

}
