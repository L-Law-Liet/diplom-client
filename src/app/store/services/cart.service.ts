import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  URL = environment.API + '/carts'
  constructor(private http: HttpClient) { }

  all(): Observable<any>{
    return this.http.get(this.URL)
  }

  create(body: {product_id: number, count: number}): Observable<any>{
    return this.http.post(this.URL, body)
  }
  delete(id: number): Observable<any>{
    return this.http.delete(this.URL + '/' + id)
  }
}
