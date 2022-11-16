import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { apiServer } from '../app-service';
import { ICourses } from '../interfaces/courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses: ICourses[] | null = null;
  errors = false;
  btn = true;
  loading = true;
  constructor(private apiServer: apiServer, @Inject(DOCUMENT)
  private document: Document) { }

  ngOnInit(): void {
    this.apiServer.loadCourses().subscribe({
      next: (value) => {
        this.loading = !this.loading;
        this.courses = value;

      },
      error: (err) => {
        this.errors = !this.loading;
        console.error(err);
      }
    })

  }

}
