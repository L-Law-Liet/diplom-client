import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  URL = environment.API + '/news'
  constructor(
    private http: HttpClient
  ) { }
  all(): Observable<any>{
    return this.http.get(this.URL)
  }
  getById(id: number): Observable<any>{
    return this.http.get(this.URL + '/' + id)
  }
}
