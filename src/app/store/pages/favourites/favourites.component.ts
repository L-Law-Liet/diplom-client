import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  products: Product[] = [
    {name: 'Product1', price: 18.09, image: {link: 'https://via.placeholder.com/640x480.png/777?text=Product1'}, description: 'a', id: 12, created_at: '', media: [], updated_at: ''},
    {name: 'Product2', price: 8.45, image: {link: 'https://via.placeholder.com/640x480.png/777?text=Product2'}, description: 'a', id: 12, created_at: '', media: [], updated_at: ''},
    {name: 'Product3', price: 23.98, image: {link: 'https://via.placeholder.com/640x480.png/777?text=Product3'}, description: 'a', id: 12, created_at: '', media: [], updated_at: ''},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
