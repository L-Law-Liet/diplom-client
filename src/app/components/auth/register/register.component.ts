import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {BaseAuth} from "../../../interfaces/base-auth";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../styles/style.css']
})
export class RegisterComponent extends BaseAuth implements OnInit {
  inputs = [
    {name: 'name', type: 'text', icon: 'name', placeholder: 'Name'},
    {name: 'email', type: 'email', icon: 'email', placeholder: 'Email'},
    {name: 'phone', type: 'tel', icon: 'phone', placeholder: 'Phone'},
    {name: 'password', type: 'password', icon: 'password', placeholder: 'Password', eye: true},
    {name: 'password_confirmation', type: 'password', icon: 'password_confirmation', placeholder: 'Confirm Password', eye: true},
  ]
  constructor(private service: AuthService, private router: Router) {
    super();
    this.form = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      password: new FormControl(''),
      password_confirmation: new FormControl(''),
    });
  }
  ngOnInit(): void {
  }
  register(): void{
    this.form.disable();
    this.service.register(this.form.getRawValue()).subscribe(res => {
        console.log(res);
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
