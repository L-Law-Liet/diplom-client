import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {ProductsComponent} from "./pages/products/products.component";
import {ProductDetailComponent} from "./pages/product-detail/product-detail.component";
import {CabinetComponent} from "./pages/cabinet/cabinet.component";
import {ContactsComponent} from "./pages/contacts/contacts.component";
import {CartComponent} from "./pages/cart/cart.component";
import {FavouritesComponent} from "./pages/favourites/favourites.component";
import {NewsComponent} from "./pages/news/news.component";
import {ArticleComponent} from "./pages/article/article.component";
import {AboutUsComponent} from "./pages/about-us/about-us.component";
import {PartnersComponent} from "./pages/partners/partners.component";
import {AuthGuard} from "../auth/guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'partners',
    component: PartnersComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'news/:id',
    component: ArticleComponent
  },
  {
    path: 'category/:id',
    component: ProductsComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent
  },
  {
    path: 'cabinet',
    component: CabinetComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'favourites',
    component: FavouritesComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
