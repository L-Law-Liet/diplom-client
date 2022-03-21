import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CategoryService} from '../../../store/services/category.service';
import {Category} from '../../../store/models/category.model';
import {AuthService} from "../../../auth/services/auth.service";
import {UserService} from "../../services/user.service";
import {EventService} from "../../services/event.service";
import {InfoService} from "../../../store/services/info.service";
import {environment} from "../../../../environments/environment";
import {IDictionary} from "../../interfaces/dictionary";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  breadcrumbs: string[] = []
  loading = true

  data: IDictionary<string> = {
    company: '',
    instagram: '',
    facebook: '',
    tel: '8 (---) --- -- --',
    email: '',
    address: '',
    logo: '',
  }
  categories: Category[] = [];
  constructor(public router: Router,
              public service: CategoryService,
              public auth: AuthService,
              private eventService: EventService,
              private infoService: InfoService,
              public userService: UserService) {}

  ngOnInit(): void {
    this.getCategories();
    this.eventService.currentBreadcrumbs.subscribe(
      breadcrumbs => (this.breadcrumbs = breadcrumbs)
    )
    this.getInfos()
  }

  getCategories(): void{
    this.service.updateCategories();
    this.categories = this.service.categories;
    this.loading = false;
  }

  logout(){
    this.auth.logout();
  }

  getInfo(key: string) {
    this.infoService.getByKey(key).subscribe(res => {
      console.log(res)
      this.data[key] = res.value
    })
  }
  getInfos() {
    for (const key in this.data) {
      this.getInfo(key)
    }
  }
}
