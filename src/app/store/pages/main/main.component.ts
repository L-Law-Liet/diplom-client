import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product.model";
import {ExternalApiService} from "../../../shared/services/external-api.service";
import {IDictionary} from "../../../shared/interfaces/dictionary";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  products: Product[] = []
  currencies = new Map([['USD', 0], ['RUB', 0], ['EUR', 0]])
  oilPrices = new Map([['Brent', 0]])

  sliders: any[] = [
    {img: 'https://via.placeholder.com/640x480.png/777?text=', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, totam.'},
    {img: 'https://via.placeholder.com/640x480.png/777?text=', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, molestias?'},
    {img: 'https://via.placeholder.com/640x480.png/777?text=', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, velit.'}
  ]
  categories: any[] = [
    {name: 'Oil products', img: 'https://via.placeholder.com/252x275.png/777?text=-'},
    {name: 'Gas', img: 'https://via.placeholder.com/252x275.png/777?text=-'},
    {name: 'Gas station', img: 'https://via.placeholder.com/252x275.png/777?text=-'},
    {name: 'Fuel cards', img: 'https://via.placeholder.com/252x275.png/777?text=-'},
    {name: 'Project Growth', img: 'https://via.placeholder.com/252x275.png/777?text=-'},
    {name: 'Protection of health, nature', img: 'https://via.placeholder.com/252x275.png/777?text=-'},
  ]
  navs = [
    {name: 'Contacts', link: 'contacts', icon: 'fas fa-address-book'},
    {name: 'Write to us', link: 'contacts', icon: 'fas fa-marker'},
    {name: 'FAQ', link: 'contacts', icon: 'fas fa-question-circle'},
  ]

  constructor(private productService: ProductService, private externalApiService: ExternalApiService) { }

  ngOnInit(): void {
    this.getCurrency()
    this.getOilPrice()
    this.getProducts()
  }
  getCurrency(): void {
    this.externalApiService.getCurrencies().subscribe(res => {
      for (const [key, val] of this.currencies) {
        this.currencies.set(key, (1 / res.data[key]))
      }
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
  getProducts() {
    this.productService.all().subscribe(res => {
      this.products = res
    }, error => {
      console.log(error)
    })
  }
}
