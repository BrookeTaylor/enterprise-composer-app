/*
============================================
; Title: Exercise 4.2 – Inversion of Control and Dependency Injection
; Author: Professor Krasso
; Date: 06/12/2023
; Modified By: Brooks
; Description: composer-details.component
============================================
*/

import { Component, OnInit } from '@angular/core';

// Add an import statement for the IComposer interface
import { IComposer } from '../composer.interface';


// Add an import statement for the ActivatedRoute from Angular’s built-in RouterModule
import { ActivatedRoute } from '@angular/router';

// Add an import statement for the Composer Service
import { ComposerService } from '../composer.service';

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
export class ComposerDetailsComponent implements OnInit {

  // Add a variable called composerId of type number
  composerId: number;
  composer: IComposer;


  // In the components constructor and using the ActivatedRoute object
  constructor(private route: ActivatedRoute, private composerService: ComposerService) {

    // call the snapshot function to retrieve the composerId parameter
    //value and assign it to the composerId variable.

    // Parameter values will always return a string value, so you will
    // need to use parseInt to parse the string into a numerical value
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId'), 10);

    // Add an if statement to check the composerId value
    if (this.composerId) {
      this.composer = this.composerService.getComposer(this.composerId);
    }

   }

  ngOnInit(): void {
  }

}
