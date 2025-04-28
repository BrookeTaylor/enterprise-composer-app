/**
 * Title: Exercise 3.2 - Passing Data to Routes, Part 1
 * Instructor: Professor Krasso
 * Author: Brooke Taylor
 * Date: 6/8/23
 * Revision: 4/27/25
 * Description: Composer Interface
 */

// Rename the interface to IComposer, export interface IComposer
export interface IComposer {

  composerId: number;
  fullName: string;
  genre: string;
  img: string;
  source: string;
  worksOne: string;
  worksTwo: string;
  bio: string;
}
