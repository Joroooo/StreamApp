import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListService } from '../services/movies-list.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [],
  providers: [
    MoviesListService,
  ],
})
export class MoviesModule { }
