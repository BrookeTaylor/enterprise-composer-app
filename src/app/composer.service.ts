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
         composerId: 100, fullName: 'Antonio Vivaldi', genre: 'Baroque', img: 'assets/composers/vivaldi.jpg', source: 'https://en.wikipedia.org/wiki/Antonio_Vivaldi', worksOne: 'The 4 Seasons', worksTwo: 'L\'Olimpiade', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus  nisl sit amet gravida maximus. Nunc est nunc, aliquet vulputate nisi a,  sagittis finibus dolor. Fusce scelerisque mauris in mi luctus, fringilla facilisis neque feugiat. Curabitur et porta mauris. Suspendisse  consectetur imperdiet dolor, vitae ultricies nisl gravida vitae.'
       },
       {
         composerId: 101, fullName: 'Johann Sebastian Bach', genre: 'Baroque', img: 'assets/composers/bach.jpg', source: 'https://en.wikipedia.org/wiki/Johann_Sebastian_Bach', worksOne: 'Orchestral Suite No.3', worksTwo: 'Cello Suite #1 in G, Prelude', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus  nisl sit amet gravida maximus. Nunc est nunc, aliquet vulputate nisi a,  sagittis finibus dolor. Fusce scelerisque mauris in mi luctus, fringilla facilisis neque feugiat. Curabitur et porta mauris. Suspendisse  consectetur imperdiet dolor, vitae ultricies nisl gravida vitae.'
       },
       {
         composerId: 102, fullName: 'Wolfgang Amadeus Mozart', genre: 'Classical', img: 'assets/composers/mozart.jpg', source: 'https://en.wikipedia.org/wiki/Wolfgang_Amadeus_Mozart?variant=zh-cn', worksOne: 'Rondo alla turca', worksTwo: 'Requiem, K. 615: Illf. Lacrimosa', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus  nisl sit amet gravida maximus. Nunc est nunc, aliquet vulputate nisi a,  sagittis finibus dolor. Fusce scelerisque mauris in mi luctus, fringilla facilisis neque feugiat. Curabitur et porta mauris. Suspendisse  consectetur imperdiet dolor, vitae ultricies nisl gravida vitae.'
       },
       {
         composerId: 103, fullName: 'Ludwig van Beethoven', genre: 'Classical', img: 'assets/composers/beethoven.jpg', source: 'https://en.wikipedia.org/wiki/Ludwig_van_Beethoven', worksOne: 'Moonlight Sonata', worksTwo: 'Fur Elise', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus  nisl sit amet gravida maximus. Nunc est nunc, aliquet vulputate nisi a,  sagittis finibus dolor. Fusce scelerisque mauris in mi luctus, fringilla facilisis neque feugiat. Curabitur et porta mauris. Suspendisse  consectetur imperdiet dolor, vitae ultricies nisl gravida vitae.'
       },
       {
         composerId: 104, fullName: 'Frederic Chopin', genre: 'Romantic', img: 'assets/composers/chopin.jpg', source: 'https://en.wikipedia.org/wiki/Fr%C3%A9d%C3%A9ric_Chopin', worksOne: 'Nocturne No.2 in E-Flat Major', worksTwo: '24 Preludes', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus  nisl sit amet gravida maximus. Nunc est nunc, aliquet vulputate nisi a,  sagittis finibus dolor. Fusce scelerisque mauris in mi luctus, fringilla facilisis neque feugiat. Curabitur et porta mauris. Suspendisse  consectetur imperdiet dolor, vitae ultricies nisl gravida vitae.'
       },
       {
        composerId: 105, fullName: 'Pyotr Ilyich Tchaikovsky', genre: 'Romantic', img: 'assets/composers/tchaikovsky.jpg', source: 'https://en.wikipedia.org/wiki/Pyotr_Ilyich_Tchaikovsky?variant=zh-tw', worksOne: 'Waltz of the Flowers', worksTwo: 'Dance of the Sugar Plum Fairy', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus  nisl sit amet gravida maximus. Nunc est nunc, aliquet vulputate nisi a,  sagittis finibus dolor. Fusce scelerisque mauris in mi luctus, fringilla facilisis neque feugiat. Curabitur et porta mauris. Suspendisse  consectetur imperdiet dolor, vitae ultricies nisl gravida vitae.'
      },
      {
        composerId: 106, fullName: 'Claude Debussy', genre: 'Impressionist', img: 'assets/composers/debussy.jpg', source: 'https://en.wikipedia.org/wiki/Claude_Debussy', worksOne: 'Clair De Lune', worksTwo: 'Arabesque', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus  nisl sit amet gravida maximus. Nunc est nunc, aliquet vulputate nisi a,  sagittis finibus dolor. Fusce scelerisque mauris in mi luctus, fringilla facilisis neque feugiat. Curabitur et porta mauris. Suspendisse  consectetur imperdiet dolor, vitae ultricies nisl gravida vitae.'
      },
      {
        composerId: 107, fullName: 'Erik Satie', genre: 'Impressionist', img: 'assets/composers/satie.jpg', source: 'https://en.wikipedia.org/wiki/Erik_Satie', worksOne: 'Gymnopedie', worksTwo: 'Je te veux', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus  nisl sit amet gravida maximus. Nunc est nunc, aliquet vulputate nisi a,  sagittis finibus dolor. Fusce scelerisque mauris in mi luctus, fringilla facilisis neque feugiat. Curabitur et porta mauris. Suspendisse  consectetur imperdiet dolor, vitae ultricies nisl gravida vitae.'
      },
      {
        composerId: 108, fullName: 'Igor Stravinsky', genre: '20th Century', img: 'assets/composers/stravinsky.jpg', source: 'https://en.wikipedia.org/wiki/Igor_Stravinsky', worksOne: 'The Rite of Spring', worksTwo: 'The Firebird', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus  nisl sit amet gravida maximus. Nunc est nunc, aliquet vulputate nisi a,  sagittis finibus dolor. Fusce scelerisque mauris in mi luctus, fringilla facilisis neque feugiat. Curabitur et porta mauris. Suspendisse  consectetur imperdiet dolor, vitae ultricies nisl gravida vitae.'
      },
      {
        composerId: 109, fullName: 'Phillip Glass', genre: '20th Century', img: 'assets/composers/glass.jpg', source: 'https://en.wikipedia.org/wiki/Philip_Glass', worksOne: 'Pruit Igoe', worksTwo: 'Truman Sleeps', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus  nisl sit amet gravida maximus. Nunc est nunc, aliquet vulputate nisi a,  sagittis finibus dolor. Fusce scelerisque mauris in mi luctus, fringilla facilisis neque feugiat. Curabitur et porta mauris. Suspendisse  consectetur imperdiet dolor, vitae ultricies nisl gravida vitae.'
      },
      {
        composerId: 110, fullName: 'John Williams', genre: 'Film', img: 'assets/composers/williams.jpg', source: 'https://en.wikipedia.org/wiki/John_Williams', worksOne: 'The Imperial March', worksTwo: 'O Holy Night', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus  nisl sit amet gravida maximus. Nunc est nunc, aliquet vulputate nisi a,  sagittis finibus dolor. Fusce scelerisque mauris in mi luctus, fringilla facilisis neque feugiat. Curabitur et porta mauris. Suspendisse  consectetur imperdiet dolor, vitae ultricies nisl gravida vitae.'
      },
      {
        composerId: 111, fullName: 'Joe Hisaishi', genre: 'Film', img: 'assets/composers/hisaishi.jpg', source: 'https://en.wikipedia.org/wiki/Joe_Hisaishi', worksOne: 'Merry-Go-Round of Life', worksTwo: 'One Summer\'s Day', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus  nisl sit amet gravida maximus. Nunc est nunc, aliquet vulputate nisi a,  sagittis finibus dolor. Fusce scelerisque mauris in mi luctus, fringilla facilisis neque feugiat. Curabitur et porta mauris. Suspendisse  consectetur imperdiet dolor, vitae ultricies nisl gravida vitae.'
      },
      {
        composerId: 112, fullName: 'Koji Kondo', genre: 'Games', img: 'assets/composers/kondo.jpg', source: 'https://en.wikipedia.org/wiki/Koji_Kondo', worksOne: 'Main Theme to The Legend of Zelda', worksTwo: 'Super Mario - Castle Theme', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus  nisl sit amet gravida maximus. Nunc est nunc, aliquet vulputate nisi a,  sagittis finibus dolor. Fusce scelerisque mauris in mi luctus, fringilla facilisis neque feugiat. Curabitur et porta mauris. Suspendisse  consectetur imperdiet dolor, vitae ultricies nisl gravida vitae.'
      },
      {
        composerId: 113, fullName: 'Nobuo Uematsu', genre: 'Games', img: 'assets/composers/uematsu.jpg', source: 'https://en.wikipedia.org/wiki/Nobuo_Uematsu', worksOne: 'One-Winged Angel', worksTwo: 'A Place to Call Home', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus  nisl sit amet gravida maximus. Nunc est nunc, aliquet vulputate nisi a,  sagittis finibus dolor. Fusce scelerisque mauris in mi luctus, fringilla facilisis neque feugiat. Curabitur et porta mauris. Suspendisse  consectetur imperdiet dolor, vitae ultricies nisl gravida vitae.'
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



