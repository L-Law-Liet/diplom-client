import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  URL = environment.API + '/articles'
  TYPES_URL = environment.API + '/article-types'
  constructor(
    private http: HttpClient
  ) { }

  all(): Observable<any>{
    return this.http.get(this.URL)
  }
  getTypes(): Observable<any>{
    return this.http.get(this.TYPES_URL)
  }
  getByType(type: number): Observable<any>{
    return this.http.get(this.URL + '/' + type)
  }
}
