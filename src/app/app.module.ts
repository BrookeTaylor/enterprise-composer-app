/**
 * Title: Exercise 4.3 – Handling Form Events with Observables
 * Instructor: Professor Krasso
 * Author: Brooke Taylor
 * Date: 6/12/23
 * Revision: 4/25/25
 * Description: App Module
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Link each component: composer-list, about, contact to the top navigation links
import { ComposerListComponent } from './composer-list/composer-list.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ComposerDetailsComponent } from './composer-details/composer-details.component';
import { SortPanelComponent } from './sort-panel/sort-panel.component';

import { RouterModule } from '@angular/router';

// Add an import statement for Angular’s built-in FormsModule and ReactiveFormsModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FilterPanelComponent } from './filter-panel/filter-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    ComposerListComponent,
    AboutComponent,
    ContactUsComponent,
    ComposerDetailsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
// Add the FormsModule and ReactiveFormsModule to the imports array
    FormsModule,
    ReactiveFormsModule,
    SortPanelComponent,
    FilterPanelComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
