import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BaseAuth} from "../../interfaces/base-auth";
import {IDictionary} from "../../../shared/interfaces/dictionary";
import {UserService} from "../../../shared/services/user.service";
import {EventService} from "../../../shared/services/event.service";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../styles/style.css']
})
export class LoginComponent extends BaseAuth implements OnInit {
  inputs = [
    {name: 'email', type: 'email', icon: 'email', placeholder: 'Email'},
    {name: 'password', type: 'password', icon: 'password', placeholder: 'Password', eye: true}
  ]
  errors: IDictionary<string> = environment.errors

  constructor(private service: AuthService,
              private userService: UserService,
              private router: Router,
              private eventService: EventService) {
    super();
    this.form = new FormGroup({
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.eventService.changeBreadcrumbs(['Sign-in'])
  }

  login(): void {
    console.log(this.form, this.form.get('email')?.errors)
    this.form.disable();
    this.service.login(this.form.getRawValue()).subscribe(res => {
      this.userService.setUser(res.user)
        this.router.navigate(['/'])
      },
      error => {
        this.form.enable();
        this.form.setErrors(error.error.errors);
        console.log(this.form.errors);
      }
    );
  }
}

