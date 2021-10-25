import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { participant } from './gereequipe/participant';


@Injectable({
  providedIn: 'root'
})
export class ParticipantService {
  private environement=environment.apiBaseUrl;
  constructor(private http:HttpClient) { }

  public addparticipant (part:participant):Observable<participant>{
    return this.http.post(`${this.environement}/api/part/add`,part);
  }

  public getAllPart():Observable<participant[]>{
    return this.http.get<participant[]>(this.environement+'/api/part/get')
  }
  public delette(id:number):Observable<participant>{
    return this.http.delete<participant>(this.environement+'/api/part/delete/'+id)
  }
  
 
}
