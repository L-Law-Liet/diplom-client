import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {ProductsComponent} from "./pages/products/products.component";
import {ProductDetailComponent} from "./pages/product-detail/product-detail.component";
import {CabinetComponent} from "./pages/cabinet/cabinet.component";
import {ContactsComponent} from "./pages/contacts/contacts.component";

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
