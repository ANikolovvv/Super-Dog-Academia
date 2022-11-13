import { Component, OnInit, HostListener } from '@angular/core';
import { apiServer } from '../app-service';
import { ICoaches } from '../interfaces/coaches';

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.scss']
})
export class CoachesComponent implements OnInit {
  coaches: ICoaches[] | null = null;
  errors = false;
  btn = "show";

  constructor(private apiServer: apiServer) { }

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
  // onScroll(e:any) {
  //   console.log('window', e.currentTarget,1+6);
  // }

  divScroll(e: any) {

    this.btn = "hidden";
    setTimeout(() => {
      this.btn = "show"
    }, 2000)

  }

}
