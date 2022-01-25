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
    path: 'news',
    component: NewsComponent
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
    path: 'cabinet',
    component: CabinetComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'favourites',
    component: FavouritesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
