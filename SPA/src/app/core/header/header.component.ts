import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  imageAlt = 'dog';
  guest=true;
  user=false;
  constructor() { }

  ngOnInit(): void {
  }

}
