/**
 * Title: Assignment 4.4 - Async Pipe
 * Instructor: Professor Krasso
 * Author: Brooke Taylor
 * Date: 6/17/23
 * Revision: 4/25/25
 * Description: Composer Service
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
         composerId: 100, fullName: 'Antonio Vivaldi', genre: 'Baroque'
       },
       {
         composerId: 101, fullName: 'Johann Sebastian Bach', genre: 'Baroque'
       },
       {
         composerId: 102, fullName: 'Wolfgang Amadeus Mozart', genre: 'Classical'
       },
       {
         composerId: 103, fullName: 'Ludwig van Beethoven', genre: 'Classical'
       },
       {
         composerId: 104, fullName: 'Frederic Chopin', genre: 'Romantic'
       },
       {
        composerId: 105, fullName: 'Pyotr Ilyich Tchaikovsky', genre: 'Romantic'
      },
      {
        composerId: 106, fullName: 'Claude Debussy', genre: 'Impressionist'
      },
      {
        composerId: 107, fullName: 'Erik Satie', genre: 'Impressionist'
      },
      {
        composerId: 108, fullName: 'Igor Stravinsky', genre: '20th Century'
      },
      {
        composerId: 109, fullName: 'Phillip Glass', genre: '20th Century'
      },
      {
        composerId: 110, fullName: 'John Williams', genre: 'Film'
      },
      {
        composerId: 111, fullName: 'Joe Hisaishi', genre: 'Film'
      },
      {
        composerId: 112, fullName: 'Koji Kondo', genre: 'Games'
      },
      {
        composerId: 113, fullName: 'Nobuo Uematsu', genre: 'Games'
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


     getComposersSortedAlphabetically(): Observable<IComposer[]> {
      const sorted = [...this.composers].sort((a, b) => a.fullName.localeCompare(b.fullName));
      return of(sorted);
    }


}



