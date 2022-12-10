import { Component, Inject, OnInit } from '@angular/core';

import { DOCUMENT } from "@angular/common";

import { trigger, transition, style, animate, state } from '@angular/animations';


@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '100%',
        transform: 'rotate(80deg)'
      })),
      state('closed', style({
        height: '100%',
        transform: 'rotate(0deg)'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
    trigger('leftRight', [
      // ...
      state('open', style({
        transform: 'rotate(0deg)'
      })),
      state('closed', style({
        transform: 'rotate(-180deg)'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),


  ],
})
export class NotFoundComponent implements OnInit {
  isOpen: boolean = true;
  isLeft: boolean = true;
  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    setInterval(() => {
      this.isOpen = !this.isOpen;
      this.isLeft = !this.isLeft
    }, 3000)
  }


}
