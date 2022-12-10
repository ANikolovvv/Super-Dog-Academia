import { Component, OnInit } from '@angular/core';

import { apiServer } from '../app-service';
import { ICoaches } from '../interfaces/coaches';


@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.scss', './responsive.component.scss'],

})
export class CoachesComponent implements OnInit {
  coaches: ICoaches[] | null = null;
  errors = false;
  btn = true;
  loading = true;
  windowScrolled = false;

  constructor(private apiServer: apiServer) { }

  ngOnInit(): void {
    this.apiServer.loadCoaches().subscribe({
      next: (value) => {
        this.loading = !this.loading;
        this.coaches = value;

      },
      error: (err) => {
        this.errors = !this.loading;
        console.error(err);
      }
    })

  }


}
