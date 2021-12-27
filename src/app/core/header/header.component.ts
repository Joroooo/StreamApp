import { Component, HostListener, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2, OnDestroy, Input, Output, OnChanges } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { PassDataService } from '../../services/pass-data.service';
import { interval, of, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { DeviceDetectorService } from 'ngx-device-detector';
 


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy { 
  
  location =  window.location.href;
  home = this.location.substring(this.location.lastIndexOf('/') + 1, this.location.length) || location;

screenHeight?: number;
screenWidth?: number;
  
  timeSubscription?: Subscription;
  time$ = interval(1000).pipe(startWith(''),(map(() => new Date)));
  headerBGUrl?: string;
  subscription?: Subscription;
  timeValue?: Date;
  currentTime: any = this.timeValue?.toLocaleTimeString();

  constructor(
    private renderer:Renderer2, 
    private router: Router,
    private data: PassDataService,
    
              ) { 
                this.router.events.subscribe((event) => {
                  if (event instanceof NavigationEnd) {
                    this.location =  window.location.href;
                    this.home = this.location.substring(this.location.lastIndexOf('/') + 1, this.location.length) || location;
                    this.timeSubscription = this.time$.subscribe(timeValue => this.timeValue = timeValue);
                   this.getLogo();
                  }
                });
              }

@HostListener('window:resize', ['$event'])

getLogo() {
     this.screenHeight = window.innerHeight;
     this.screenWidth = window.innerWidth;
     if(this.screenWidth <= 851) {
      return '../../../assets/images/logo2.png';
     } else {
      return '../../../assets/images/logo3.png';
     }
}

ngOnInit() {

}


changeState() {
 
}

ngOnDestroy(): void {
  this.timeSubscription?.unsubscribe();
}

}
