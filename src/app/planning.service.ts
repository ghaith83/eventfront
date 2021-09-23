import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { planning } from './client/planning';

@Injectable({
  providedIn: 'root'
})
export class PlanningService {
  private environement=environment.apiBaseUrl;
  constructor(private http:HttpClient) { }

public addplanning(planning:planning,idsal:number,idreserv:number):Observable<planning>{
  return this.http.post<planning>(`${this.environement}/api/planing/add/`+idsal+'/'+idreserv,planning);
  }

  public getallplaning(id :number,salle:number):Observable<planning[]>{
    return this.http.get<planning[]>(`${this.environement}/api/planing/get/`+id+'/'+salle);
    }
    public deleteplaning(planigtId: planning){
      return this.http.delete<planning>(`${this.environement}/api/planing/delete`+planigtId);
    }
}
