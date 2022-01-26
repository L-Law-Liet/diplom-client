import {Component, OnInit} from '@angular/core';
import {UserService} from "./shared/services/user.service";
import {AuthService} from "./auth/services/auth.service";
import set = Reflect.set;
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'diplom';
  ready = false;

  constructor(private service: UserService, private auth: AuthService, private router: Router) {
  }

  ngOnInit() {
    if (this.auth.isAuth()){
      this.setUser()
    }
    else {
      this.ready = true
    }
  }

  setUser() {
    this.service.getUser().subscribe(res => {
      console.log(res)
      this.service.setUser(res)
      this.ready = true
    }, error => {
      localStorage.removeItem('token')
      this.router.navigate(['/'])
    })
  }

}
