import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl(''),
  })
  success = ''
  warn = ''

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  forgotPassword() {
    this.form.disable()
    this.warn = ''
    this.auth.forgotPassword(this.form.value).subscribe(
      res => {
        this.success = res.status
        this.warn = res.email
      },
      error => {
        console.log(error)
        this.form.setErrors(error.error.errors);
      }
      )
    this.form.enable()
  }

}
