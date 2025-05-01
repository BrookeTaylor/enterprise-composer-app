/**
 * Title: Assignment 4.4 - Async Pipe
 * Instructor: Professor Krasso
 * Author: Brooke Taylor
 * Date: 6/17/23
 * Revision: 4/30/25
 * Description: App Component
 */

import { Component,ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {

  @ViewChild('navBar', { static: false })
  navBar!: ElementRef<HTMLElement>;

  isNavOpen = false;

  constructor(private elementRef: ElementRef) {

  }

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }

  closeNav() {
    this.isNavOpen = false;
  }


  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {

    if (
      this.isNavOpen &&
      this.navBar &&
      !this.navBar.nativeElement.contains(event.target as Node)
    ) {
      this.closeNav();
    }
  }



// Change the assignment’s name to “Assignment 4.4 - Async Pipe"
  assignment: string = 'Study Music';

}
