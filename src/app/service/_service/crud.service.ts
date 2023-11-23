import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from 'src/app/core/model/service';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }
  private url = 'http://localhost:8080/api/services'

  getServicePaginate(page: number, size: number): Observable<Service[]> {
    const params = new HttpParams().set('page', page.toString()).set('size', size.toString());
    return this.http.get<Service[]>(this.url, { params });
  }
  getAllService(): Observable<Service[]> {
    return this.http.get<Service[]>(this.url);
  }
  getServiceById(id: number): Observable<Service>{
    return this.http.get<Service>(this.url + `/${id}`)
  }
  addService(service: Service): Observable<Service>{
    return this.http.post<Service>(this.url,service)
  }
  deleteServiceById(id: number): Observable<Service>{
    return this.http.delete<Service>(this.url+`/${id}`);
  }
  editService(service: Service): Observable<Service>{
    return this.http.put<Service>(this.url + `/${service.id}`,service);
  }
  
  
}
