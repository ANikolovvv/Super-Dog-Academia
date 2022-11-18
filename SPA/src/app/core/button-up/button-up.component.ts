import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from "@angular/common";

import { trigger, transition, style, animate } from '@angular/animations';

const enterTransition = transition(':enter', [
  style({
    opacity: 0,
    background: ('blue'),

  }),
  animate('1s ease-in', style({
    opacity: 2,
    background: ('#00ff04'),

  }))
])
const exitTransition = transition(':leave', [
  style({
    opacity: 2,
    background: ('blue'),


  }),
  animate("1s ease-out", style({
    opacity: 0,
    background: ('black'),

  }))
])
const loader = trigger('loader', [enterTransition]);
const loaderOut = trigger('loaderOut', [exitTransition]);

@Component({
  selector: 'app-button-up',
  templateUrl: './button-up.component.html',
  styleUrls: ['./button-up.component.scss'],
  animations: [loader, loaderOut]
})
export class ButtonUpComponent implements OnInit {
  btn:boolean = true;
  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    
  }
  clickHandler(){
    this.btn = false;
    setTimeout(() => {
      this.btn = true
    }, 2000)
    this.document.body.scrollIntoView();
  }
}
