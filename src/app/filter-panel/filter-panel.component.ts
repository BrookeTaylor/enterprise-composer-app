/**
 * Title: Filter Panel
 * Instructor: Professor Krasso
 * Author: Brooke Taylor
 * Revision: 4/27/25
 * Description: Filter Panel Component
 */

import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter-panel',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.css']
})
export class FilterPanelComponent {

  genres: string[] = [
    'Baroque',
    'Classical',
    'Romantic',
    'Impressionist',
    '20th Century',
    'Film',
    'Games'
  ];

  selectedGenres: string[] = [...this.genres];

  @Output() filterChanged = new EventEmitter<string[]>();

  ngOnInit() {
    this.filterChanged.emit(this.selectedGenres);
  }

  onGenreChange(event: any) {
    const genre = event.target.value;
    if (event.target.checked) {
      this.selectedGenres.push(genre);
    } else {
      this.selectedGenres = this.selectedGenres.filter(g => g !== genre);
    }
    this.filterChanged.emit(this.selectedGenres);
  }


  selectAll() {
    this.selectedGenres = [...this.genres];
    this.filterChanged.emit(this.selectedGenres);
  }

  deselectAll() {
    this.selectedGenres = [];
    this.filterChanged.emit(this.selectedGenres);
  }
}
