import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Process } from 'src/app/core/model/process';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private url = 'http://localhost:8080/api/processes'
  constructor(private http: HttpClient) { }
  getAllProcess(): Observable<Process[]>{
    return this.http.get<Process[]>(this.url)
  }
  getProcessPaginate(page: number, size: number): Observable<Process[]>{
    const params = new HttpParams().set('page',page.toString()).set('size',size.toString())
    return this.http.get<Process[]>(this.url,{params})
  }
  getProcessById(id: number): Observable<Process>{
    return this.http.get<Process>(this.url + `/${id}`)
  }
  addProcess(process: Process): Observable<Process>{
    return this.http.post<Process>(this.url,process)
  }
  deleteProcessById(id: number): Observable<Process>{
    return this.http.delete<Process>(this.url+`/${id}`);
  }
  editProcess(process: Process): Observable<Process>{
    return this.http.put<Process>(this.url + `/${process.id}`,process);
  }
}
