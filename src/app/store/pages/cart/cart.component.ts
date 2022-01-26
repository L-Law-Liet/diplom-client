import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Cart} from "../../models/cart.model";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carts: Cart[] = []
  total = 0
  loading = false
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getCart()
  }
  getCart() {
    this.total = 0
    this.cartService.all().subscribe(res => {
      this.carts = res
      for (const resKey in res) {
        console.log(resKey)
        this.total += res[resKey].count * res[resKey].product.price
      }
    })
  }
  remove(id: number) {
    if (!this.loading) {
      this.loading = true
      this.cartService.delete(id).subscribe(res => {
        if (res.deleted) {
          this.getCart()
        }
      }, () => {}, () => {this.loading = false})
    }
  }
}
