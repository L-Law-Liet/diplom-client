import {LOCALE_ID, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import localeFr from '@angular/common/locales/ru-KZ';
import {registerLocaleData} from "@angular/common";
import {StoreRoutingModule} from "./store-routing.module";
import {NgxMaskModule} from "ngx-mask";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MainComponent} from "./pages/main/main.component";
import {ProductsComponent} from "./pages/products/products.component";
import {ProductDetailComponent} from "./pages/product-detail/product-detail.component";
import {ProductCardComponent} from "../shared/components/product-card/product-card.component";
import {InputTextComponent} from "../shared/components/input-text/input-text.component";
import {CabinetComponent} from "./pages/cabinet/cabinet.component";
import {ContactsComponent} from "./pages/contacts/contacts.component";
import {CarouselComponent} from "../shared/components/carousel/carousel.component";
import {AuthInterceptor} from "../auth/interceptors/auth.interceptor";
import {AngularYandexMapsModule, YaConfig} from "angular8-yandex-maps";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CartComponent } from './pages/cart/cart.component';
import { FavouritesComponent } from './pages/favourites/favourites.component';
import { NewsComponent } from './pages/news/news.component';
import { ArticleComponent } from './pages/article/article.component';
import {ImagePipe} from "../shared/pipes/image.pipe";
import { AboutUsComponent } from './pages/about-us/about-us.component';
import {FeedbackComponent} from "../shared/components/feedback/feedback.component";
import { PartnersComponent } from './pages/partners/partners.component';
import {TouchFormComponent} from "../shared/components/touch-form/touch-form.component";
import {CeoInfoComponent} from "../shared/components/ceo-info/ceo-info.component";
import {LoadingComponent} from "../shared/components/loading/loading.component";

registerLocaleData(localeFr);

const mapConfig: YaConfig = {
  apikey: 'API_KEY',
  lang: 'en_US',
};

@NgModule({
  declarations: [
    MainComponent,
    ProductsComponent,
    ProductDetailComponent,
    ProductCardComponent,
    InputTextComponent,
    CabinetComponent,
    ContactsComponent,
    CarouselComponent,
    CartComponent,
    FavouritesComponent,
    NewsComponent,
    ArticleComponent,
    ImagePipe,
    AboutUsComponent,
    FeedbackComponent,
    TouchFormComponent,
    CeoInfoComponent,
    PartnersComponent,
    LoadingComponent,
  ],
    imports: [
        CommonModule,
        StoreRoutingModule,
        HttpClientModule,
        NgxMaskModule.forRoot(),
        AngularYandexMapsModule.forRoot(mapConfig),
        FormsModule,
        ReactiveFormsModule,
    ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'ru-KZ'
    },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
})
export class StoreModule { }
