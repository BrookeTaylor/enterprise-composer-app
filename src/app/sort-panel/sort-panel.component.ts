/**
 * Title: Sort Panel
 * Instructor: Professor Krasso
 * Author: Brooke Taylor

 * Revision: 4/29/25
 * Description: Sort Panel Component
 */

import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort-panel',
  templateUrl: './sort-panel.component.html',
  styleUrls: ['./sort-panel.component.css']
})
export class SortPanelComponent {
  @Output() sortChanged = new EventEmitter<'chronological' | 'alphabetical'>();

  selectedOption: 'chronological' | 'alphabetical' | '' = '';

  chooseSort(option: 'chronological' | 'alphabetical') {
    this.selectedOption = option;
    this.sortChanged.emit(option);
  }
}
