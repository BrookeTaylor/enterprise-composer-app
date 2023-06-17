/*
============================================
; Title: Exercise 4.2 – Inversion of Control and Dependency Injection
; Author: Professor Krasso
; Date: 06/12/2023
; Modified By: Brooks
; Description: app-routing.module
============================================
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { ComposerDetailsComponent } from './composer-details/composer-details.component';
// import { Composer } from './composer.class';

const routes: Routes = [

  { path: '', component: ComposerListComponent },
  { path: 'composer-list', component: ComposerListComponent },
  // Add a new entry for the composer details page with an id
  // parameter called composerId
  { path: 'composer-details/:composerId', component: ComposerDetailsComponent},
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactUsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
