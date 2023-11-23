import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Boite } from 'src/app/core/model/boite';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private url = 'http://localhost:8080/api/boites'
  constructor(private http: HttpClient) { }
  getAllBoite(): Observable<Boite[]>{
    return this.http.get<Boite[]>(this.url)
  }
  getBoitePaginate(page: number, size: number): Observable<Boite[]>{
    const params = new HttpParams().set('page',page.toString()).set('size',size.toString());

    return this.http.get<Boite[]>(this.url,{params})
  }
  getBoiteById(id: number): Observable<Boite>{
    return this.http.get<Boite>(this.url + `/${id}`)
  }
  addBoite(boite: Boite): Observable<Boite>{
    return this.http.post<Boite>(this.url,boite)
  }
  deleteBoiteById(id: number): Observable<Boite>{
    return this.http.delete<Boite>(this.url+`/${id}`);
  }
  editBoite(boite: Boite): Observable<Boite>{
    return this.http.put<Boite>(this.url + `/${boite.id}`,boite);
  }
}
