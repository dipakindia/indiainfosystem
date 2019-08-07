import { NavbarModule } from './shared/navbar/navbar.module';
import { HeaderModule } from './shared/header/header.module';
import { FooterModule } from './shared/footer/footer.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home/home.component';
import { PagesComponent } from './containers/pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    FooterModule,
    HeaderModule,
    NavbarModule,
    AppRoutingModule
  ],
  exports: [PagesComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
