import { Component, OnInit, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import { DeviceDetectorService } from 'ngx-device-detector';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  screenHeight?: number;
  screenWidth?: number;
  deviceInfo?:any = null;
  mobile?: boolean = false;

  constructor(
    private deviceService: DeviceDetectorService,
    private router: Router,
    ) { 
    this.onResize(); 
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?:any) {
     this.screenHeight = window.innerHeight;
     this.screenWidth = window.innerWidth;
     if(this.screenWidth <= 460) {
       return this.mobile = true;
     } else {
       return this.mobile = false;
     }
  }
  ngOnInit(): void {
  }

}
