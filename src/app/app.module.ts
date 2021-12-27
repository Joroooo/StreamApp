import { Inject, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './core/header/header.component';
import { AccordionComponent } from './elements/accordion/accordion.component';
import { FooterComponent } from './core/footer/footer.component';
import { CatalogComponent } from './movies/catalog/catalog.component';
import { UserModule } from './user/user-module';
import { PassDataService } from './services/pass-data.service';
import { FilterPipe } from './pipes/filter.pipe';
import { SafePipe } from './pipes/safe.pipe';
import { PlayerComponent } from './elements/player/player.component';
import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AccordionComponent,
    FooterComponent,
    CatalogComponent,
    FilterPipe,
    SafePipe,
    PlayerComponent,

  ],
  imports: [
    BrowserModule,
    UserModule,
    AppRoutingModule,
    CoreModule,
    FontAwesomeModule

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
