import { Component, OnInit, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

screenHeight?: number;
screenWidth?: number;
deviceInfo?:any = null;
mobile?: boolean = false;

  constructor(private deviceService: DeviceDetectorService) { this.onResize(); }

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
