import { Component, OnInit } from '@angular/core';
import {News} from "../../models/news.model";
import {NewsService} from "../../services/news.service";
import {ActivatedRoute} from "@angular/router";
import {EventService} from "../../../shared/services/event.service";
import {Article} from "../../models/article.model";
import {ArticleService} from "../../services/article.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article!: Article
  id = 0
  constructor(private articleService: ArticleService,
              private router: ActivatedRoute,
              private eventService: EventService) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params.id
    this.getArticle()
  }
  getArticle(): void {
    this.articleService.getById(this.id).subscribe(res => {
      this.article = res
      this.eventService.changeBreadcrumbs(['News', this.article.title])
      console.log(res)
    })
  }
}
