import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private breadcrumbs: string[] = []
  constructor() { }
  public editDataDetails: string[] = [];
  public subject = new Subject<string[]>();
  private breadcrumbsSource = new  BehaviorSubject(this.editDataDetails);
  currentBreadcrumbs = this.breadcrumbsSource.asObservable();
  changeBreadcrumbs(breadcrumbs: string[]) {
    this.breadcrumbsSource.next(breadcrumbs)
  }
}
