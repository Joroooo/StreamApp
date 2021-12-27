import { Injectable, Component, OnInit, OnDestroy, ViewChild, Renderer2, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';

@Injectable({providedIn: 'root'})

export class PassDataService {


  public messageSource = new BehaviorSubject<string>('middle');
  currentMessage = this.messageSource.asObservable();

  public scrollHamburger = new BehaviorSubject<boolean>(false);
  hamburger = this.scrollHamburger.asObservable();

  constructor(


  ) { }
  changeMessage(message: any) {
    this.messageSource.next(message);
  }

  changeHamburger(state:boolean) {
    this.scrollHamburger.next(state);
  }

  private showMenu: boolean = false;
  private subject = new Subject<any>();

  toggleMenuItem(): void {
    this.showMenu = !this.showMenu;
    this.subject.next(this.showMenu);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }

}
