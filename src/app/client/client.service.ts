import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { retry, catchError } from 'rxjs/operators';
import { client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private environement=environment.apiBaseUrl;
  constructor(private http :HttpClient) { }
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  public addClient(client: any): Observable<client> {
    return this.http.post<client>(this.environement+'/api/client/add',
    JSON.stringify(client), this.httpHeader).pipe(retry(1), catchError(this.httpError));
  }
  public loginClient(client: any): Observable<any> {
    return this.http.post<any>(this.environement+'/api/client/login',client)
  }
  public getclientid(id:number):Observable<client>{
    return this.http.get<client>(`${this.environement}/api/client/find/`+id);
  }

  httpError(error: { error: { message: string }; status: any; message: any }) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client side error
      msg = error.error.message;
    } else {
      // server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }
}
