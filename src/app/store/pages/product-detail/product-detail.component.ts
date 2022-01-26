import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../models/product.model";
import {environment} from "../../../../environments/environment";
import {FavouritesService} from "../../services/favourites.service";
import {AuthService} from "../../../auth/services/auth.service";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product!: Product
  id: number = 0
  link = environment.DEFAULT_IMG
  favourite = false
  public count = 1
  loading = false;
  added = false
  constructor(
    private productService: ProductService,
    public auth: AuthService,
    private favouritesService: FavouritesService,
    private cartService: CartService,
    private router: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.id = this.router.snapshot.params.id
    this.getProduct(this.id)
    this.getFavourite()
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

  getFavourite() {
    this.favouritesService.getByProductId(this.id).subscribe(res => {
      this.favourite = res.exists
    }, error => {
      this.favourite = false
    })
  }

  addToFavourite() {
    this.favouritesService.create({product_id: this.id}).subscribe(res => {
      if (res.created)
        this.favourite = true
    },
        () => {},
      () => { this.loading = false })
  }

  removeFromFavourite() {
    this.favouritesService.delete(this.id).subscribe(res => {
      if (res.deleted) {
        this.favourite = false
      }
    },
      () => {},
      () => { this.loading = false }
    )
  }
  toggleFavourite() {
    if (!this.loading) {
      this.loading = true;
      this.favourite ? this.removeFromFavourite() : this.addToFavourite()
    }
  }
  addToCart() {
    if (!this.loading) {
      this.loading = true
      this.cartService.create({product_id: this.id, count: this.count}).subscribe(res => {
        if (res.created) {
          this.added = true
          this.count = 1
        }
      }, () => {}, () => {this.loading = false})
    }
  }
}
