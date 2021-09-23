import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { reservation } from './reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private environement=environment.apiBaseUrl;
  constructor(private http :HttpClient) { }
 
  public addReservation(reservation: reservation,id:number): Observable<any> {
    return this.http.post<any>(this.environement+'/api/reservation/add/'+id,reservation)
  }

  public getreservationId(id:number):Observable<reservation>{
    return this.http.get<reservation>(this.environement+'/api/reservation/find/'+id)
  }
  public getsize():Observable<number>{
    return this.http.get<number>(this.environement+'/api/reservation/get/size')
  }
}
