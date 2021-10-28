import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any
  ready = false
  id: number = 0

  constructor(private productService: ProductService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params.id
    this.getProduct(this.id)
  }
  getProduct(id: any) {
    this.productService.getById(id).subscribe(res => {
      this.product = res
      this.ready = true
      console.log(this.product)
    }, error => {
      console.log(error)
    })
  }
}
