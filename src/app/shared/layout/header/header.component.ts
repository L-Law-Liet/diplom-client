import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CategoryService} from '../../../store/services/category.service';
import {Category} from '../../../store/models/category.model';
import {AuthService} from "../../../auth/services/auth.service";
import {UserService} from "../../services/user.service";
import {EventService} from "../../services/event.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  breadcrumbs: string[] = []
  loading = true;
  categories: Category[] = [];
  constructor(public router: Router,
              public service: CategoryService,
              public auth: AuthService,
              private eventService: EventService,
              public userService: UserService) {}

  ngOnInit(): void {
    this.getCategories();
    this.eventService.currentBreadcrumbs.subscribe(
      breadcrumbs => (this.breadcrumbs = breadcrumbs)
    )
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
