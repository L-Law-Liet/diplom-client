import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/product.model";
import {FavouritesService} from "../../services/favourites.service";

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  products: Product[] = []
  loading = false

  constructor(private favouritesService: FavouritesService) { }

  ngOnInit(): void {
    this.getFavourites()
  }
  getFavourites() {
    this.favouritesService.all().subscribe(res => {
      this.products = res
    })
  }
  remove(id: number) {
    if (!this.loading) {
      this.loading = true
      this.favouritesService.delete(id).subscribe(res => {
        if (res.deleted)
          this.getFavourites()
      })
    }
  }
}
