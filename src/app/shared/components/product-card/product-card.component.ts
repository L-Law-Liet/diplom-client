import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {Product} from "../../../store/models/product.model";
import {environment} from "../../../../environments/environment";
import {CartService} from "../../../store/services/cart.service";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input()
  product!: Product
  @Input()
  detailed = false
  @Input()
  isCart = false
  @Input()
  count = 0
  @Output()
  changeCount = new EventEmitter<number>();


  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    console.log(this.product)
  }

  getDefaultImage() {
    return environment.DEFAULT_IMG + this.product.name;
  }

  setCount() {
    (this.count > 0)
      ? this.changeCount.emit(this.count)
      : alert('Minimum 1')
  }
}
