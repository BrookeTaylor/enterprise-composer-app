import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort-panel',
  templateUrl: './sort-panel.component.html',
  styleUrls: ['./sort-panel.component.css']
})
export class SortPanelComponent {
  @Output() sortChanged = new EventEmitter<string>();

  chooseSort(option: string) {
    this.sortChanged.emit(option);
  }
}
