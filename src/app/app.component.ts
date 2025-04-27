/**
 * Title: Assignment 4.4 - Async Pipe
 * Instructor: Professor Krasso
 * Author: Brooke Taylor
 * Date: 6/17/23
 * Revision: 4/25/25
 * Description: App Component
 */

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {

// Change the assignment’s name to “Assignment 4.4 - Async Pipe"
  assignment: string = 'Study Music';

}
