import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Product} from "../../../store/models/product.model";

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
  constructor() { }

  ngOnInit(): void {
  }

}
