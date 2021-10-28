import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  URL = environment.API + '/products';
  BY_CATEGORY = URL + '/category/';

  constructor(
    private http: HttpClient
  ) { }

  all(): Observable<any>{
    return this.http.get(this.URL)
  }
  getByCategoryId(id: string): Observable<any>{
    return this.http.get(this.BY_CATEGORY + id)
  }
}
