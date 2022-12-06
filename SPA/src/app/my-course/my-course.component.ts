import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { IOrder } from '../interfaces/course';


@Component({
  selector: 'app-my-course',
  templateUrl: './my-course.component.html',
  styleUrls: ['./my-course.component.scss']
})
export class MyCourseComponent implements OnInit {


  courses: IOrder[] | null = null;
  arr: any;
  errors = false;
  info: boolean = true;
  loading = true;

  constructor(private authServer: AuthService, private router: Router) { }
  ngOnInit(): void {
    interval(6000).subscribe(
      (val) => {
        this.authServer.getMyCourse().subscribe({
          next: (value: any) => {
            this.info = value.history.length > 0;
            this.loading = !this.loading;
            this.courses = value.history;
            this.arr = value.history
            console.log(this.info, 'fdddfgfdfdgdffdgd')

          },
          error: (err: any) => {
            this.errors = !this.loading;
            console.error(err);
          }
        })
      })
  }

  deleteHandler(id: any): void {
    this.authServer.deleteMyCourse(id).subscribe({
      next: (value: any) => {
        console.log(value, ' delete  fdddfgfdfdgdffdgd')
        this.router.navigate(['/my-course']);
      },
      error: (err: any) => {
        console.error(err);
      }
    })
    console.log(id, 'delete')
  }



}