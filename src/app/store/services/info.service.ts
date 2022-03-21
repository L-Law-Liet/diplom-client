import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  URL = environment.API + '/infos'
  constructor(
    private http: HttpClient
  ) { }

  all(): Observable<any>{
    return this.http.get(this.URL)
  }
  getByKey(key: string): Observable<any>{
    return this.http.get(this.URL + '/' + key)
  }
}
