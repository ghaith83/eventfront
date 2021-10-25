import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { salle } from './Salles';



@Injectable({
  providedIn: 'root'
})
export class SalleService {
  private environement=environment.apiBaseUrl;
 public salle?:salle

  constructor(private http :HttpClient) { }
  
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  public getallsalles ():Observable<salle[]>{
    return this.http.get<salle[]>(`${this.environement}/api/salle/all`);
  }
 
  public getsallebyid(id:number):Observable<salle>{
    return this.http.get<salle>(`${this.environement}/api/salle/find/`+id);
  }
  public getsalleByName(nom:string):Observable<salle>{
    return this.http.get<salle>(`${this.environement}/api/salle/nom/`+nom);
  }

  public getsal(){
    return this.http.get<salle[]>(`${this.environement}/api/salle/all`);
  }
  public getsallebycat(catnom?:string):Observable<salle[]>{
    return this.http.get<salle[]>(`${this.environement}/api/salle/bycat/`+catnom);
  }
  

  
  
  


}
