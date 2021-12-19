import { Component, HostListener, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2, OnDestroy, Input, Output, OnChanges } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  location =  window.location.href;
  home = this.location.substring(this.location.lastIndexOf('/') + 1, this.location.length) || location;
  authPage?: boolean = false;

  constructor(
    private renderer:Renderer2, 
    private router: Router,
    ) { 
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        this.location = window.location.href;
        this.home = this.location.substring(this.location.lastIndexOf('/')+1, this.location.length) || location;
        if(this.home == 'login' || this.home == 'register') {
          this.authPage = true;
          this.removeFooter(this.authPage);
        } else {
          this.authPage = false;
          this.removeFooter(this.authPage);
        }
      }
    });
  }

  @ViewChild('footer', {static: false}) footer:any;
  removeFooter(state:boolean) {
    if(state) {
      this.renderer.setStyle(this.footer.nativeElement, 'display', 'none');
    } else {
      this.renderer.setStyle(this.footer.nativeElement, 'display', 'block');
    }
  }
  ngOnInit(): void {
  }

}
