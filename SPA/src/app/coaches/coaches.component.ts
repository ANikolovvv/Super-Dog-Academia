import { Component, OnInit } from '@angular/core';
import { apiServer } from '../app-service';
import { ICoaches } from '../interfaces/coaches';
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
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.scss'],
  animations: [loader, loaderOut]
})
export class CoachesComponent implements OnInit {
  coaches: ICoaches[] | null = null;
  errors = false;
  btn = true;
  loading = true;

  constructor(private apiServer: apiServer) { }
  animation() {
    
  }
  ngOnInit(): void {
    this.apiServer.loadCoaches().subscribe({
      next: (value) => {
        this.loading=!this.loading;
        this.coaches = value;

      },
      error: (err) => {
        this.errors = !this.loading;
        console.error(err);
      }
    })
  }
  onClick():void {
    this.btn = false;
    setTimeout(() => {
      this.btn = true
    }, 1000)


  }


}
