import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";
import {tap} from "rxjs/operators";
import {User} from "../../shared/models/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  LOGIN_URL = environment.API + '/login';
  REGISTER_URL = environment.API + '/register';
  FORGOT_PASSWORD_URL = environment.API + '/forgot-password';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(user: any): Observable<{token: string, user: User}>{
    return this.http.post<{token: string, user: User}>(this.LOGIN_URL, user).pipe(
      tap(
        ({token, user}) => {
          console.log('serv', token, user);
          this.setToken(token);
        },
        error => {
          console.log(error)
        }
      )
    );
  }
  register(user: any): Observable<{token: string, user: User}>{
    console.log(user);
    return this.http.post<{token: string, user: User}>(this.REGISTER_URL, user).pipe(
      tap(
        ({token, user}) => {
          console.log('serv', token, user);
          this.setToken(token);
        },
        error => {
          console.log(error)
        }
      )
    );
  }

  getToken(): any {
    localStorage.getItem('token');
  }
  setToken(token: any) {
    localStorage.setItem('token', token);
  }

  logout(): void{
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }
  isAuth(): boolean{
    return !!localStorage.getItem('token');
  }
  forgotPassword(form: any): Observable<any>{
    return this.http.post(this.FORGOT_PASSWORD_URL, form)
  }
}
