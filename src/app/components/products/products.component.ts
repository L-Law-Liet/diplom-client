import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product.model";
import {ActivatedRoute, Router, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = []
  ready = false
  id: number = 0

  constructor(private productService: ProductService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params.id
    this.getProductsByCategoryId(this.id)
  }
  getProductsByCategoryId(id: any) {
    this.productService.getByCategoryId(id).subscribe(res => {
      this.products = res
      this.ready = true
      console.log(this.products)
    }, error => {
      console.log(error)
    })
  }
}
