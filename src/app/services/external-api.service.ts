import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ExternalApiService {
  private API = environment.API
  private OIL_API = this.API + '/oil-price'
  private CURRENCY_API = environment.FREECURRENCY_API
  private CURRENCY_API_KEY = environment.FREECURRENCY_API_KEY
  private BASE_CURRENCY = environment.BASE_CURRENCY

  constructor(private http: HttpClient) { }

  getCurrencies(): Observable<any> {
    let url = this.CURRENCY_API
    url += '?base_currency=' + this.BASE_CURRENCY
    url += '&apikey=' + this.CURRENCY_API_KEY
    return this.http.get(url)
  }

  getOilPrice(): Observable<any> {
    let url = this.CURRENCY_API
    url += '?base_currency=' + this.BASE_CURRENCY
    url += '&apikey=' + this.CURRENCY_API_KEY
    return this.http.get(this.OIL_API)
  }
}
