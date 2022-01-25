import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../models/product.model";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product!: Product
  id: number = 0
  link = environment.DEFAULT_IMG
  favourite = true
  public count = 3
  constructor(private productService: ProductService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params.id
    this.getProduct(this.id)
  }
  getProduct(id: any) {
    this.productService.getById(id).subscribe(res => {
      this.product = res
      this.link = this.product.image.link
    }, error => {
      console.log(error)
    })
  }
  setImage(link: string) {
    this.link = link
  }
}
