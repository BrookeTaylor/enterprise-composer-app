/**
 * Title: Exercise 4.2 – Inversion of Control and Dependency Injection
 * Instructor: Professor Krasso
 * Author: Brooke Taylor
 * Date: 6/12/23
 * Revision: 4/25/25
 *
 * Description: App Routing Module
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { ComposerDetailsComponent } from './composer-details/composer-details.component';
// import { Composer } from './composer.class';

// Wild card
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

  { path: '', redirectTo: '/composer-list', pathMatch: 'full' },
  { path: 'composer-list', component: ComposerListComponent },
  // Add a new entry for the composer details page with an id
  // parameter called composerId
  { path: 'composer-details/:composerId', component: ComposerDetailsComponent},
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
