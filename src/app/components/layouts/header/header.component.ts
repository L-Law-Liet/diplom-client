import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Router} from '@angular/router';
import {CategoryService} from '../../../services/category.service';
import {Category} from '../../../models/category.model';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loading = true;
  // @ts-ignore
  router: Router;
  categories: Category[];
  // @ts-ignore
  constructor(private router: Router,
              public service: CategoryService,
              public auth: AuthService) {
    this.router = router;
    this.categories = [];
  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void{
    this.service.updateCategories();
    this.categories = this.service.categories;
    this.loading = false;
  }

  logout(){
    this.auth.logout();
  }

}
