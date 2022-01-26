import { Component, OnInit } from '@angular/core';
import {News} from "../../models/news.model";
import {NewsService} from "../../services/news.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article!: News
  id = 0
  constructor(private newsService: NewsService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params.id
    this.getArticle()
  }
  getArticle(): void {
    this.newsService.getById(this.id).subscribe(res => {
      this.article = res
      console.log(res)
    })
  }
}
