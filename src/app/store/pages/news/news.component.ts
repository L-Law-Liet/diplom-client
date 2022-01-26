import { Component, OnInit } from '@angular/core';
import {NewsService} from "../../services/news.service";
import {News} from "../../models/news.model";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: News[] = [];
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.getNews()
  }
  getNews(): void {
    this.newsService.all().subscribe(res => {
      this.news = res;
      console.log(res);
    },
      error => {
        console.log(error)
      })
  }
}
