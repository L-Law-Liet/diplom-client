import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  URL = environment.API + '/orders'
  constructor(private http: HttpClient) { }

  makeOrder(): Observable<any> {
    return this.http.post(this.URL, {})
  }

  all(): Observable<any> {
    return this.http.get(this.URL)
  }
}
