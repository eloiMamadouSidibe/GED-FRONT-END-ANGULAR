import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rayon } from 'src/app/core/model/rayon';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private url = 'http://localhost:8080/api/rayons'
  constructor(private http: HttpClient) { }
  getAllRayon(): Observable<Rayon[]>{
    return this.http.get<Rayon[]>(this.url)
  }
  getRayonPaginate(page: number, size: number): Observable<Rayon[]>{
    const params = new HttpParams().set('page',page.toString()).set('size', size.toString())
    return this.http.get<Rayon[]>(this.url,{params})
  }
  getRayonById(id: number): Observable<Rayon>{
    return this.http.get<Rayon>(this.url + `/${id}`)
  }
  addRayon(rayon: Rayon): Observable<Rayon>{
    return this.http.post<Rayon>(this.url,rayon)
  }
  deleteRayonById(id: number): Observable<Rayon>{
    return this.http.delete<Rayon>(this.url+`/${id}`);
  }
  editRayon(rayon: Rayon): Observable<Rayon>{
    return this.http.put<Rayon>(this.url + `/${rayon.id}`,rayon);
  }
}
