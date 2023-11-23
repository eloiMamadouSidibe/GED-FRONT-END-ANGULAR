import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Salle } from 'src/app/core/model/salle';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }
  private url = 'http://localhost:8080/api/salles'

  getAllSalle(): Observable<Salle[]>{
    return this.http.get<Salle[]>(this.url)
  }
  getSallePaginate(page: number, size: number): Observable<Salle[]>{
    const params = new HttpParams().set('page',page.toString()).set('size',size.toString())
    return this.http.get<Salle[]>(this.url,{params})
  }
  
  getSalleById(id: number): Observable<Salle>{
    return this.http.get<Salle>(this.url + `/${id}`)
  }
  addSalle(salle: Salle): Observable<Salle>{
    return this.http.post<Salle>(this.url,salle)
  }
  deleteSalleById(id: number): Observable<Salle>{
    return this.http.delete<Salle>(this.url+`/${id}`);
  }
  editSalle(salle: Salle): Observable<Salle>{
    return this.http.put<Salle>(this.url + `/${salle.id}`,salle);
  }
}
