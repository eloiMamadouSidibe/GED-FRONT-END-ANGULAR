import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeDocument } from 'src/app/core/model/type-document';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private url = 'http://localhost:8080/api/type-documents';

  constructor(private http: HttpClient) { }

  getAllType(): Observable<TypeDocument[]>{
    return this.http.get<TypeDocument[]>(this.url)
  }
  getTypePaginate(page: number, size: number): Observable<TypeDocument[]>{
    const params = new HttpParams().set('page',page.toString()).set('size',size.toString());
    return this.http.get<TypeDocument[]>(this.url,{params})
  }
  getTypeById(id: number): Observable<TypeDocument>{
    return this.http.get<TypeDocument>(this.url+`/${id}`)

  }
  addType(typeDocument: TypeDocument): Observable<TypeDocument>{
    return this.http.post<TypeDocument>(this.url,typeDocument)
  }
  
  deleteTypeById(id: number): Observable<TypeDocument>{
    return this.http.delete<TypeDocument>(this.url+`/${id}`);
  }
  editType(typeDocument: TypeDocument): Observable<TypeDocument>{
    return this.http.put<TypeDocument>(this.url + `/${typeDocument.id}`,typeDocument);
  }

}
