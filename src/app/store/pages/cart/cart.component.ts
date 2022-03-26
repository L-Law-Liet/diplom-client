import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Cart} from "../../models/cart.model";
import {OrderService} from "../../services/order.service";
import {EventService} from "../../../shared/services/event.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carts: Cart[] = []
  total = 0
  discount = 0
  loading = false
  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private eventService: EventService
  ) { }

  ngOnInit(): void {
    this.eventService.changeBreadcrumbs(['Cart'])
    this.getCart()
  }
  getCart() {
    this.total = 0
    this.cartService.all().subscribe(res => {
      this.carts = res['carts']
      this.discount = res['discount']
      this.sum()
    })
  }
  remove(id: number) {
    if (!this.loading) {
      this.loading = true
      this.cartService.delete(id).subscribe(res => {
        if (res.deleted) {
          this.getCart()
        }
      }, () => {this.loading = false}, () => {this.loading = false})
    }
  }
  checkout() {
    if (!this.loading && this.carts.length) {
      this.loading = true
      this.orderService.makeOrder().subscribe(res => {
        if (res.ordered) {
          alert('Ordered!')
          this.getCart()
        } else {
          alert('Error')
        }
      }, () => {
        alert('Error!')
        this.loading = false
      }, () => {
        this.loading = false
      })
    }
  }
  setCount(count: number, cart: Cart) {
    cart.count = count
    this.sum()
    this.cartService.update(cart.id, {product_id: cart.product_id, count}).subscribe(res => {
      console.log(res)
    }, error => {alert('Error')})
  }
  sum() {
    this.total = 0
    for (const resKey in this.carts) {
      this.total += this.carts[resKey].count * this.carts[resKey].product.price
    }
  }
  totalWithDiscount() {
    return this.total * (100 - this.discount) / 100
  }
}
