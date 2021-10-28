import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  products: Product[] = []
  ready = false

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.productService.all().subscribe(res => {
      this.products = res
      this.ready = true
    }, error => {
      console.log(error)
    })
  }
}
