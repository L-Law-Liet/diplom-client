import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {Category} from '../models/category.model';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  CATEGORY_URL = environment.API + '/categories';

  public categories: Category[] = [];

  constructor(private http: HttpClient) {  }

  updateCategories(): void{
    this.http.get<Category[]>(this.CATEGORY_URL).subscribe(
      (res) => {
        this.categories = res;
      }
    );
  }
  getCategories(): Observable<any>{
    return this.http.get(this.CATEGORY_URL);
  }

  addCategory(fd: FormData): Observable<any>{
    return this.http.post(this.CATEGORY_URL, fd);
  }

  updateCategory(id: number, fd: FormData): Observable<any>{
    console.log(fd);
    return this.http.put(this.CATEGORY_URL + '/' + id, fd);
  }
  removeCategory(id: number): Observable<any>{
    return this.http.delete(this.CATEGORY_URL + `/${id}`);
  }
  getCategory(id: any): Observable<any>{
    return this.http.get(this.CATEGORY_URL + `/${id}`);
  }
}
