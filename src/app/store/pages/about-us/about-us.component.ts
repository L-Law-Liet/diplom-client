import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EventService} from "../../../shared/services/event.service";
import {ArticleService} from "../../services/article.service";
import {environment} from "../../../../environments/environment";
import {Article} from "../../models/article.model";

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  private type = environment.ARTICLE_TYPES.about
  public articles: Article[] = []

  constructor(private eventService: EventService,
              private articleService: ArticleService) { }

  ngOnInit(): void {
    this.eventService.changeBreadcrumbs(['About Us'])
    this.getArticles()
  }

  getArticles() {
    this.articleService.getByType(this.type).subscribe(res => {
      this.articles = res
    })
  }
}
