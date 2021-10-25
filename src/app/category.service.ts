import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { category } from './category';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private environement=environment.apiBaseUrl;
  constructor(private http:HttpClient) { }
  public getallcat():Observable<category[]>{
    return this.http.get<category[]>(`${this.environement}/api/category/all`);
  }
}
