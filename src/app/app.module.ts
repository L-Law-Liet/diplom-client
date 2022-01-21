import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import {LoginComponent} from "./components/auth/login/login.component";
import {RegisterComponent} from "./components/auth/register/register.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {NgxMaskModule} from "ngx-mask";
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { MainComponent } from './components/main/main.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { CabinetComponent } from './components/cabinet/cabinet.component';
import {AuthInterceptor} from "./interceptors/auth.interceptor";
import { ContactsComponent } from './pages/contacts/contacts.component';
import {AngularYandexMapsModule, YaConfig} from "angular8-yandex-maps";

import localeFr from '@angular/common/locales/ru-KZ';
import {registerLocaleData} from "@angular/common";
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
registerLocaleData(localeFr);
const mapConfig: YaConfig = {
  apikey: 'API_KEY',
  lang: 'en_US',
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    ForgotPasswordComponent,
    MainComponent,
    ProductsComponent,
    ProductDetailComponent,
    ProductCardComponent,
    InputTextComponent,
    CabinetComponent,
    ContactsComponent,
    CarouselComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(),
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularYandexMapsModule.forRoot(mapConfig)
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'ru-KZ'
    },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
