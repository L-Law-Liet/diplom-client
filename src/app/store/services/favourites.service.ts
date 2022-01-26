import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  URL = environment.API + '/favourites'
  constructor(
    private http: HttpClient
  ) { }
  all(): Observable<any>{
    return this.http.get(this.URL)
  }
  getByProductId(id: number): Observable<any>{
    return this.http.get(this.URL + '/' + id)
  }
  delete(id: number): Observable<any>{
    return this.http.delete(this.URL + '/' + id)
  }
  create(body: {product_id: number}): Observable<any>{
    return this.http.post(this.URL, body)
  }
}
