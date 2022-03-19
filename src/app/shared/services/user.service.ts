import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../models/user.model";
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Media} from "../models/media.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  USER_API = environment.API + '/user'
  USERS_API = environment.API + '/users'
  USER_IMAGE_API = this.USER_API + '/image'

  user!: User;
  constructor(private http: HttpClient) { }

  getUser(): Observable<User>{
    return this.http.get<User>(this.USER_API)
  }

  setUser(user: User){
    this.user = user
  }

  setAvatar(image: File): Observable<string>{
    const formData = new FormData()
    formData.append('image', image)
    return this.http.post<string>(this.USER_IMAGE_API, formData)
  }

  update(body: {phone: string, name: string}): Observable<any> {
    return this.http.post(this.USERS_API, body)
  }
}
