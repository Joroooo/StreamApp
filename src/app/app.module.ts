import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './core/header/header.component';
import { AccordionComponent } from './elements/accordion/accordion.component';

import { FooterComponent } from './core/footer/footer.component';
import { CatalogComponent } from './movies/catalog/catalog.component';
import { UserModule } from './user/user-module';
import { PassDataService } from './pass-data.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,

    AccordionComponent,

    FooterComponent,
    CatalogComponent,
  ],
  imports: [
    BrowserModule,
    UserModule,
    AppRoutingModule,
  ],
  providers: [
    PassDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
