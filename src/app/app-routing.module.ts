import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/auth/login/login.component";
import {RegisterComponent} from "./components/auth/register/register.component";
import {ForgotPasswordComponent} from "./components/auth/forgot-password/forgot-password.component";
import {MainComponent} from "./components/main/main.component";
import {ProductsComponent} from "./components/products/products.component";
import {ProductDetailComponent} from "./components/product-detail/product-detail.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'category/:id',
    component: ProductsComponent
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
