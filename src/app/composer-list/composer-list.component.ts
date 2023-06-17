/*
============================================
; Title: Assignment 4.4 - Async Pipe
; Author: Professor Krasso
; Date: 06/17/2023
; Modified By: Brooks
; Description: composer-list Component
============================================
*/

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

// Add an import statement for Observable
import { Observable } from 'rxjs';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  // Update the composers variable to type Observable<IComposer[]>
  composers: Observable<IComposer[]>;

// Add a variable named txtSearchControl and assign it a new instance
// of the FormControl object
  txtSearchControl = new FormControl('');

// Add the ComposerService to the components constructor
  constructor(private composerService: ComposerService) {

// In the body of the components constructor, replace the getComposers() call
// from the Composer class with the composerService.getComposers() function
    this.composers = this.composerService.getComposers();


// In the components constructor and underneath the getComposers() call
// add a subscribe() method that listens for valueChanges and calls
// the filterComposers() function.  Also, make sure you add a
// debounceTime of 500.
    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposers(val));


  }

  ngOnInit(): void {
  }

// Add a new function and name it filterComposers(name: string) and in
// the body of the function call the alert() function and pass-in
// the name parameter

  filterComposers(name: string) {

// with a call to the composerService.filterComposers(name) function and
// assign the results to the composers variable
    this.composers = this.composerService.filterComposers(name);

  }

}
