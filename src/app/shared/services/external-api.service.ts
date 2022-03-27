import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ExternalApiService {
  private API = environment.API
  private OIL_API = this.API + '/oil-price'
  private CURRENCY_API = this.API + '/currencies'
  private CURRENCY_API_KEY = environment.FREECURRENCY_API_KEY
  private BASE_CURRENCY = environment.BASE_CURRENCY

  constructor(private http: HttpClient) { }

  getCurrencies(): Observable<any> {
    return this.http.get(this.CURRENCY_API)
  }

  getOilPrice(): Observable<any> {
    return this.http.get(this.OIL_API)
  }
}
