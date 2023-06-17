/*
============================================
; Title: Exercise 4.3 – Handling Form Events with Observables
; Author: Professor Krasso
; Date: 06/12/2023
; Modified By: Brooks
; Description: app.module
============================================
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

import { RouterModule } from '@angular/router';

// Add an import statement for Angular’s built-in FormsModule and ReactiveFormsModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ComposerListComponent,
    AboutComponent,
    ContactUsComponent,
    ComposerDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
// Add the FormsModule and ReactiveFormsModule to the imports array
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
