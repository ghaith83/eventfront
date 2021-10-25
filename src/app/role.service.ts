import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { role } from './role/role';


@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private environement=environment.apiBaseUrl;
  constructor(private http:HttpClient) { }
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };


  public addrole (role:any):Observable<role>{
    return this.http.post(`${this.environement}/api/role/add`,role);
  }
  public getAllRol():Observable<role[]>{
    return this.http.get<role[]>(this.environement+'/api/role/get')
  }
 public delette(id:number){
    return this.http.delete<role>(this.environement+'/api/role/delete/'+id,this.httpHeader)
  }
}
