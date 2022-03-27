import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product.model";
import {ExternalApiService} from "../../../shared/services/external-api.service";
import {EventService} from "../../../shared/services/event.service";
import {ArticleService} from "../../services/article.service";
import {environment} from "../../../../environments/environment";
import {Article} from "../../models/article.model";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private type = environment.ARTICLE_TYPES.homeSlider
  products: Product[] = []
  currencies = new Map([['USD', 0], ['RUB', 0], ['EUR', 0]])
  oilPrices = new Map([['Brent', 0]])

  sliders: Article[] = []

  constructor(private productService: ProductService,
              private externalApiService: ExternalApiService,
              private eventService: EventService,
              private articleService: ArticleService) { }

  ngOnInit(): void {
    this.eventService.changeBreadcrumbs([])
    this.getCurrency()
    this.getOilPrice()
    this.getArticles()
  }
  getCurrency(): void {
    this.externalApiService.getCurrencies().subscribe(res => {
      this.currencies = res
      console.log(this.currencies)
    })
  }
  getOilPrice(): void {
    this.externalApiService.getOilPrice().subscribe(res => {
      for (const [key, val] of this.oilPrices) {
        this.oilPrices.set(key, res[key])
      }
      console.log(this.oilPrices, res)
    })
  }
  getArticles() {
    this.articleService.getByType(this.type).subscribe(res => {
      this.sliders = res
    })
  }
}
