import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SousService } from 'src/app/core/model/sous-service';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
 private url = 'http://localhost:8080/api/sous-services'
  constructor(private http: HttpClient) { }
  getAllSousService(): Observable<SousService[]>{
    return this.http.get<SousService[]>(this.url)
  }
  getSousServicePaginate(page: number,size: number): Observable<SousService[]>{
    const params = new HttpParams().set('page',page.toString()).set('size',size.toString())
    return this.http.get<SousService[]>(this.url,{params})
  }
  getSousServiceById(id: number): Observable<SousService>{
    return this.http.get<SousService>(this.url + `/${id}`)
  }
  addSousService(sousService: SousService): Observable<SousService>{
    return this.http.post<SousService>(this.url,sousService)
  }
  deleteSousServiceById(id: number): Observable<SousService>{
    return this.http.delete<SousService>(this.url+`/${id}`);
  }
  editSousService(sousService: SousService): Observable<SousService>{
    return this.http.put<SousService>(this.url + `/${sousService.id}`,sousService);
  }

}
