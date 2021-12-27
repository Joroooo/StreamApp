import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerComponent } from './elements/player/player.component';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './movies/catalog/catalog.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'catalog',
    component: CatalogComponent
  },
  {
    path: 'player',
    component: PlayerComponent
  },
  {
    path: 'user-profile',
    component: UserProfileComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //{ enableTracing: true}
  exports: [RouterModule]
})
export class AppRoutingModule { }
