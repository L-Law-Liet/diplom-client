import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  // @ts-ignore
  form: FormGroup;
  hide = true;

  constructor(private service: AuthService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: '',
      password: '',
    });
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
        console.log(error);
        this.form.setErrors(error.error.errors);
        console.log(this.form.errors);
      }
    );
  }
}
