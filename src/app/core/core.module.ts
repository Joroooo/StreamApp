import { NgModule, Optional, SkipSelf, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { MoviesModule } from '../movies/movies.module';
import { PLATFORM_ID } from '@angular/core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MoviesModule
  ],
  providers: [],
  exports: [
    HttpClientModule,
  ],
})
export class CoreModule { 
  constructor(
    @Inject(PLATFORM_ID) platformId: any,
    @Optional() @SkipSelf() coreModule: CoreModule,
   
     
   
  ) {
    if(coreModule) {
      throw new Error('you try to import core module more than once! ');
    }
  }



}
