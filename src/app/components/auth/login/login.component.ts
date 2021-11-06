import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from "@angular/forms";
import {BaseAuth} from "../../../interfaces/base-auth";

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

  constructor(private service: AuthService, private router: Router) {
    super();
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }
  login(): void{
    this.form.disable();
    this.service.login(this.form.getRawValue()).subscribe(res => {
        console.log('s', res);
        this.router.navigate(['/'])
        // tslint:disable-next-line:no-shadowed-variable
      },
      error => {
        this.form.enable();
        this.form.setErrors(error.error.errors);
        console.log(this.form.errors);
      }
    );
  }
  setVal(input: any) {
    this.form.get(input.name)?.setValue(input.value)
  }
}
