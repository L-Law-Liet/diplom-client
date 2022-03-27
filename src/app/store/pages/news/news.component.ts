import { Component, OnInit } from '@angular/core';
import {NewsService} from "../../services/news.service";
import {News} from "../../models/news.model";
import {EventService} from "../../../shared/services/event.service";
import {Article} from "../../models/article.model";
import {ArticleService} from "../../services/article.service";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  private type = environment.ARTICLE_TYPES.news
  ready = false
  news: Article[] = [];
  constructor(private articleService: ArticleService,
              private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.changeBreadcrumbs(['News'])
    this.getNews()
  }
  getNews(): void {
    this.articleService.getByType(this.type).subscribe(res => {
      this.news = res;
      this.ready = true
    },
      error => {
        console.log(error)
      })
  }
}
