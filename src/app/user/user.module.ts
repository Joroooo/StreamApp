import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';



@NgModule({
  declarations: [
    ProfileComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
