import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {ForgotPasswordComponent} from "./pages/forgot-password/forgot-password.component";
import {AuthRoutingModule} from "./auth-routing.module";
import {NgxMaskModule} from "ngx-mask";



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NgxMaskModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
