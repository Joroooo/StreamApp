import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  classes = ['nav-link', 'show', 'fade', 'active']; 

@ViewChild('about', { static: false }) about:any
@ViewChild('details', { static: false }) details:any
@ViewChild('home', { static: false }) home:any
@ViewChild('profile', { static: false }) profile:any

  constructor(
    private location: Location,
    private renderer: Renderer2,
    ) { }


  changeClass(el:any) {

    let elementId: string = (el.target as Element).id;

   if (elementId == this.about.nativeElement.id) {

    this.renderer.addClass(this.about.nativeElement, 'active');
    this.renderer.addClass(this.home.nativeElement, 'show');
    this.renderer.addClass(this.home.nativeElement, 'active');


    this.renderer.removeClass(this.details.nativeElement, 'active');
    this.renderer.removeClass(this.profile.nativeElement, 'show');
    this.renderer.removeClass(this.profile.nativeElement, 'active');

   } else {
    this.renderer.removeClass(this.about.nativeElement, 'active');
    this.renderer.removeClass(this.home.nativeElement, 'show');
    this.renderer.removeClass(this.home.nativeElement, 'active');

    this.renderer.addClass(this.details.nativeElement, 'active');
    this.renderer.addClass(this.profile.nativeElement, 'show');
    this.renderer.addClass(this.profile.nativeElement, 'active');
   }
    

  }
  ngOnInit(): void {
  }
  scrollToElement($element:any): void {
    console.log($element);
    this.location.path() + $element; 
  }
}
