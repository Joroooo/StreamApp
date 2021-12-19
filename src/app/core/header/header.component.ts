import { Component, HostListener, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2, OnDestroy, Input, Output, OnChanges } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { PassDataService } from 'src/app/pass-data.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit { 
  
  location =  window.location.href;
  home = this.location.substring(this.location.lastIndexOf('/') + 1, this.location.length) || location;
  opened: boolean = false;
  temporalFalseForPlayer: boolean = false;
  toggleMenu: boolean = false;
  frontPage?: boolean = false;
  hamburgerWhite?:boolean = false;
  
  

  state?: string;
  subscription?: Subscription;

  constructor(
    private renderer:Renderer2, 
    private router: Router,
    private data: PassDataService,
    
              ) { 
                this.router.events.subscribe((event) => {
                  if (event instanceof NavigationEnd) {
                    this.location =  window.location.href;
                    this.home = this.location.substring(this.location.lastIndexOf('/') + 1, this.location.length) || location;
                  }
                });
               
              }

@ViewChild('mySidenav', { static: false }) nav:any
@ViewChild('hamburger', { static: false }) hamburger:any
@ViewChild('menuIcon', { static: false }) menuIcon:any


ngOnInit() {

this.subscription = this.data.onToggle().subscribe(currentValue => {
this.toggleMenu = currentValue; 

 });

this.data.currentMessage.subscribe(newMessage => {
  this.state = newMessage;
  if(this.state == 'no') {   
    this.renderer.setStyle(this.nav.nativeElement, 'width', '0px');
  }
});

this.data.hamburger.subscribe(color => this.hamburgerWhite = color);
}


changeState() {
  this.renderer.setStyle(this.nav.nativeElement, 'width', '0px');
}

toggleNav() {
this.data.toggleMenuItem(); 

if(this.toggleMenu) {
this.opened = true;
 }
  if(this.opened) {
   this.renderer.setStyle(this.nav.nativeElement, 'width', '160px');

  }  else {
    this.renderer.setStyle(this.nav.nativeElement, 'width', '0px');
  
  }

}


}
