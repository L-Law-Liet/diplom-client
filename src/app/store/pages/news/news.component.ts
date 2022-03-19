import { Component, OnInit } from '@angular/core';
import {NewsService} from "../../services/news.service";
import {News} from "../../models/news.model";
import {EventService} from "../../../shared/services/event.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  ready = false
  news: News[] = [];
  constructor(private newsService: NewsService,
              private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.changeBreadcrumbs(['News'])
    this.getNews()
  }
  getNews(): void {
    this.newsService.all().subscribe(res => {
      this.news = res;
      this.ready = true
    },
      error => {
        console.log(error)
      })
  }
}
