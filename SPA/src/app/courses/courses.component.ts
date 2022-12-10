import { Component, OnInit, } from '@angular/core';

import { apiServer } from '../app-service';

import { ICourses } from '../interfaces/courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss','./responsive.component.scss']
})
export class CoursesComponent implements OnInit {
  courses: ICourses[] | null = null;
  errors = false;
  btn = true;
  loading = true;
  constructor(private apiServer: apiServer
  ) { }

  ngOnInit(): void {
    this.apiServer.loadCourses().subscribe({
      next: (value) => {
        this.loading = !this.loading;
        this.courses = value;
        console.log(this.courses)

      },
      error: (err) => {
        this.errors = !this.loading;
        console.error(err);
      }
    })


  }

}
