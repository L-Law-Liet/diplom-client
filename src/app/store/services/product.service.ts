import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  URL = environment.API + '/products';

  constructor(
    private http: HttpClient
  ) { }

  all(): Observable<any>{
    return this.http.get(this.URL)
  }
  getById(id: string): Observable<any>{
    return this.http.get(this.URL + '/' + id)
  }
}
