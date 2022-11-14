import { Component, OnInit, HostListener } from '@angular/core';
import { apiServer } from '../app-service';
import { ICoaches } from '../interfaces/coaches';
import { trigger, transition, style, animate } from '@angular/animations';

const enterTransition = transition(':enter', [
  style({
    opacity: 0,
   
  }),
  animate('1s ease-in', style({
    opacity: 1,
    background: ('#00ff04'),
    
  }))
])
const exitTransition = transition(':leave', [
  style({
    opacity: 1,
    background: ('red'),
    

  }),
  animate("1s ease-out", style({
    opacity: 0,
    
  }))
])
const loader = trigger('loader', [enterTransition]);
const loaderOut = trigger('loaderOut', [exitTransition]);

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.scss'],
  animations:[loader,loaderOut]
})
export class CoachesComponent implements OnInit {
  coaches: ICoaches[] | null = null;
  errors = false;
  btn = false;
  loading=false;

  constructor(private apiServer: apiServer) { }
  animation(){
    this.loading=!this.loading;
  }
  ngOnInit(): void {
    this.apiServer.loadCoaches().subscribe({
      next: (value) => {
        
        this.coaches = value;

      },
      error: (err) => {
        this.errors = true;
        console.error(err);
      }
    })
  }
  @HostListener('window:scroll', ['$event'])
 

  divScroll(e: any) {
     this.btn=true;
     setTimeout(() => {
     this.btn = false;
   }, 8000)
   
  }


}
