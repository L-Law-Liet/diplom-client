import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CategoryService} from "../../services/category.service";
import {Category} from "../../models/category.model";
import {EventService} from "../../../shared/services/event.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public category!: Category
  ready = false
  id: number = 0

  constructor(private categoryService: CategoryService,
              private router: ActivatedRoute,
              private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.changeBreadcrumbs(['Products'])
    this.router.params.subscribe(params => {
      this.id = this.router.snapshot.params.id;
      this.getCategory(this.id)
    });
    // this.id = this.router.snapshot.params.id
  }
  getCategory(id: any) {
    this.categoryService.getCategory(id ?? 0).subscribe(res => {
      this.category = res
      console.log(this.category.products[0])
      this.ready = true
    }, error => {
      console.log(error)
    })
  }
}
