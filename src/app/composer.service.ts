/*
============================================
; Title: Assignment 4.4 - Async Pipe
; Author: Professor Krasso
; Date: 06/17/2023
; Modified By: Brooks
; Description: composer.service
============================================
*/

import { Injectable } from '@angular/core';

import { IComposer } from './composer.interface';


// Add an import statement for rxjs Observable object
import { Observable } from 'rxjs';
// Add an import statement for the “of” operator from rxjs
import { of } from 'rxjs';
// Add an import statement for the rxjs map operator
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

   // Add a new field called composers of type Array<IComposer>
   composers: Array<IComposer>;

   // Remove the fullName and genre fields from the
   // constructor’s parameters
     constructor() {


   // Remove the code in the body of the constructor

   // In the class’s constructor, populate the composer’s array
   // with 5 composer objects
     this.composers = [

       {
         composerId: 100, fullName: 'Ludwig Beethoven', genre: 'Classical'
       },
       {
         composerId: 101, fullName: 'Wolfgang Mozart', genre: 'Classical'
       },
       {
         composerId: 102, fullName: 'Johannes Brahms', genre: 'Classical'
       },
       {
         composerId: 103, fullName: 'Richard Wagner', genre: 'Classical'
       },
       {
         composerId: 104, fullName: 'Peter Tchaikovsky', genre: 'Classical'
       }

     ];


     }

// Update the return type of the getComposer function to an Observable
// array of IComposer objects
     getComposers(): Observable<IComposer[]> {


       // Return the composers array
       return of(this.composers);
     }

     getComposer(composerId: number) {

       // Loop over the composer array and return the object that matches
       // the passed-in composerId
       for (let composer of this.composers)
         if (composer.composerId === composerId) {
           return composer;
         }
     }


// Add a new function called filterComposers(name: string) and
// set the return type of Observable<IComposer[]>
     filterComposers(name: string): Observable<IComposer[]> {

/**
 *
 * In the body of the function, return an Observable array of all Composer
 * objects containing the parameter name in their fullName.  We will be using
 * the pipe, map, and filter functions
 *
 * The pipe() operator is a built-in function that allows us to chain
 * functions together
 *
 * The map() function is used when we want to return a new array of objects.
 *
 * And, the filter() function, as the name suggests, filters an array of data.
 *
 */
      return of(this.composers).pipe(map(composers =>
        composers.filter(composer =>
          composer.fullName.toLowerCase().indexOf(name) > -1)))

     }

}

