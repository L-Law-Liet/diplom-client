import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {YaConfig} from "angular8-yandex-maps";
import {StoreModule} from "./store/store.module";
import {HeaderComponent} from "./shared/layout/header/header.component";
import {FooterComponent} from "./shared/layout/footer/footer.component";
import {AuthModule} from "./auth/auth.module";
import { TableComponent } from './shared/components/table/table.component';

const mapConfig: YaConfig = {
  apikey: 'API_KEY',
  lang: 'en_US',
};

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        TableComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StoreModule,
        AuthModule,
    ],
    providers: [],
  exports: [
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
