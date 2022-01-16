import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../models/user.model";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  USER_API = environment.API + '/user'

  user!: User
  constructor(private http: HttpClient) { }
  getUser(): Observable<User>{
    return this.http.get<User>(this.USER_API)
  }
  setUser(user: User){
    this.user = user
  }
}
