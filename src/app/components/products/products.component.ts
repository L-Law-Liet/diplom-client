import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CategoryService} from "../../services/category.service";
import {Category} from "../../models/category.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  // @ts-ignore
  category: Category;
  ready = false
  id: number = 0

  constructor(private categoryService: CategoryService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.id = params.id;
      this.getCategory(this.id)
    });
    // this.id = this.router.snapshot.params.id
  }
  getCategory(id: any) {
    this.categoryService.getCategory(id).subscribe(res => {
      this.category = res
      this.ready = true
    }, error => {
      console.log(error)
    })
  }
}
