import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {BaseAuth} from "../../interfaces/base-auth";
import {EventService} from "../../../shared/services/event.service";

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
  constructor(private service: AuthService,
              private router: Router,
              private eventService: EventService) {
    super();
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      phone: new FormControl('', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])),
      password: new FormControl('', Validators.required),
      password_confirmation: new FormControl('', Validators.required),
    });
  }
  ngOnInit(): void {
    this.eventService.changeBreadcrumbs(['Sign-up'])
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
