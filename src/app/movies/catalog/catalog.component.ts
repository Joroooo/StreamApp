import { Component, Input, OnInit, ViewChild, Renderer2, HostListener, OnDestroy } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { MoviesListService } from '../../services/movies-list.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { IMovie } from 'src/app/shared/interfaces';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
 
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})


export class CatalogComponent implements OnInit {


  @Input() filterBy?: string = 'all'
  //@Input() movies: IMovie[] | undefined;

	visibleImages: any[] = [];

  opened: boolean = false;

  clicked?: string;
  isHovered!: boolean[];
  currentImage?: any;
  loading: boolean = false;
  bottom?: boolean = false;

screenHeight?: number;
screenWidth?: number;
deviceInfo?:any = null;
mobile?: boolean = false;

icons = {
  faUser,
  faHeart
}


  constructor(
    private renderer: Renderer2, 
    private viewportScroller: ViewportScroller,
    private moviesService: MoviesListService,
    private deviceService: DeviceDetectorService,

    ) 
   {
     this.visibleImages = this.moviesService.getImages();
     this.onResize();
   }

   @ViewChild('changeImg', {static: false}) changeImg:any;
   @HostListener('window:resize', ['$event'])
   onResize(event?:any) {
      this.screenHeight = window.innerHeight;
      this.screenWidth = window.innerWidth;
      if(this.screenWidth <= 566) {
       
      } else {
   
      }
   }
   @ViewChild('modalOpener', { static: false }) modalOpener:any;
   @ViewChild('myModal', {static: false}) myModal:any;
   @ViewChild('modalWindow', {static: false}) modalWindow:any;
   @ViewChild('description', {static: false}) description:any;
   @ViewChild('showMoreButton', {static: false}) showMoreButton:any;
   @ViewChild('showMore', {static: false}) showMore:any;
   @ViewChild('hero', {static: false}) hero:any;
   @ViewChild('centered', {static: false}) centered:any;
   @ViewChild('loader', {static: false}) loader:any;
   @ViewChild('show-more', {static: false}) showMoreItems:any;
   @HostListener("window:scroll", ['$event'])

   onScroll(event:any) {
   
    if ((window.innerHeight + window.scrollY) > document.body.offsetHeight) {

    //this.bottom = true;
     } else {
     // this.bottom = false;
     }
    }

    checkHover(image:any, status:boolean){
      if(!status) {
        return image.url;
      } else {
        return image.gif;
      }
    }

  goToTop(elem:any){
    document.getElementById(elem)?.scrollIntoView({behavior: 'smooth'});
  }

  openModal(image:any) {
    this.currentImage = image;
    this.loading = true;
    setTimeout( () => {
    this.loading = false;
    }, 900); 
    this.renderer.setStyle(this.myModal.nativeElement, 'display', 'block');
    return this.currentImage;
  }

  closeModal() {

    this.currentImage = {};
    this.renderer.setStyle(this.myModal.nativeElement, 'display', 'none' ); 
  }
  
	ngOnInit(){
    this.isHovered = new Array(this.visibleImages.length);
    this.isHovered.fill(false);
	}

 expandDescription() {
  this.opened = !this.opened;

  if(this.opened) {
    this.renderer.setStyle(this.description.nativeElement, 'display', 'block' ); 
    this.renderer.setStyle(this.showMore.nativeElement, 'display', 'none');

  } else {
    this.renderer.setStyle(this.description.nativeElement, 'display', 'none' ); 
    this.renderer.setStyle(this.showMore.nativeElement, 'display', 'block');
  }

 } 

}
