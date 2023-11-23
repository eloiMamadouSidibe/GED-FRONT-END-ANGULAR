import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dossier } from 'src/app/core/model/dossier';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
 

  private url = 'http://localhost:8080/api/dossiers'
  constructor(private http: HttpClient) { }
  getAllDossier(): Observable<Dossier[]>{
    return this.http.get<Dossier[]>(this.url)
  }
  getDossierPaginate(page: number, size: number) {
    const params = new HttpParams().set('page',page.toString()).set('size',size.toString())
    return this.http.get<Dossier[]>(this.url,{params})
  }
  getDossierById(id: number): Observable<Dossier>{
    return this.http.get<Dossier>(this.url + `/${id}`)
  }
  addDossier(dossier: Dossier): Observable<Dossier>{
    return this.http.post<Dossier>(this.url,dossier)
  }
  deleteDossierById(id: number): Observable<Dossier>{
    return this.http.delete<Dossier>(this.url+`/${id}`);
  }
  editDossier(doissier: Dossier): Observable<Dossier>{
    return this.http.put<Dossier>(this.url + `/${doissier.id}`,doissier);
  }
}
