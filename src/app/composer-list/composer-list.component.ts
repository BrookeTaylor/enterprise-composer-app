/**
 * Title: Assignment 4.4 - Async Pipe
 * Instructor: Professor Krasso
 * Author: Brooke Taylor
 * Date: 6/17/23
 * Revision: 4/25/25
 * Description: Composer List Component
 */

import { Component, OnInit } from '@angular/core';

import { ComposerService } from '../composer.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

// Add an import statement for Observable
import { Observable } from 'rxjs';

import { of } from 'rxjs';
import { map } from 'rxjs/operators';


import { Router } from '@angular/router';

@Component({
    selector: 'app-composer-list',
    templateUrl: './composer-list.component.html',
    styleUrls: ['./composer-list.component.css'],
    standalone: false
})


export class ComposerListComponent implements OnInit {

  composers: Observable<any[]> = of([]);
  allComposers: any[] = [];
  searchTerm: string = '';
  selectedGenres: string[] = [];
  sortOption: 'alphabetical' | 'chronological' | '' = '';

  txtSearchControl = new FormControl('');


// Add the ComposerService to the components constructor
  constructor(private composerService: ComposerService, private router: Router) {

 this.composerService.getComposers().subscribe(data => {
  this.allComposers = data;

  this.selectedGenres = Array.from(new Set(data.map(c => c.genre)));

  this.updateList();
//  this.composers = of(this.allComposers);
});

this.txtSearchControl.valueChanges
.pipe(debounceTime(500))
.subscribe(val => {
  this.searchTerm = val;
  this.updateList();
});



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

  goToDetails(composerId: number): void {
    this.router.navigate(['/composer-details', composerId]);
  }






  showSortPanel: boolean = false;
  showFilterPanel: boolean = false;


toggleSortPanel(): void {
  this.showSortPanel = !this.showSortPanel;
  this.showFilterPanel = false;
  console.log('Toggled sort panel:', this.showSortPanel);
}

toggleFilterPanel(): void {
  this.showFilterPanel = !this.showFilterPanel;
  this.showSortPanel = false;
  console.log('Toggled filter panel:', this.showFilterPanel);
}


onSortChanged(option: 'alphabetical' | 'chronological'): void {
  this.sortOption = option;
  this.updateList();
}



onFilterChanged(selectedGenres: string[]): void {
  this.selectedGenres = selectedGenres;
  this.updateList();
}

private updateList(): void {

  let result = this.allComposers.filter(c => {
    const matchesSearch =
      !this.searchTerm ||
      c.fullName.toLowerCase().includes(this.searchTerm.toLowerCase());
    const matchesGenre = this.selectedGenres.includes(c.genre);
    return matchesSearch && matchesGenre;
  });

  if (this.sortOption === 'alphabetical') {
    result = result.sort((a, b) => a.fullName.localeCompare(b.fullName));
  } else if (this.sortOption === 'chronological') {
    result = result.sort((a, b) => a.composerId - b.composerId);
  }

  this.composers = of(result);
}

}
