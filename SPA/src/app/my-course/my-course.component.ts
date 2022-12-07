import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, map, merge, Observable, timeout } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { IOrder } from '../interfaces/course';
import { Store } from '@ngrx/store';
import { loadCourse, loadCorseSuccess, loadCourseFailure } from '../+store/actions';
import { getHistory } from '../+store/selectors';
import { Actions, ofType } from '@ngrx/effects';
import { Effect } from '../+store/effect';



@Component({
  selector: 'app-my-course',
  templateUrl: './my-course.component.html',
  styleUrls: ['./my-course.component.scss']
})
export class MyCourseComponent implements OnInit {

  info: boolean = true
  courses: IOrder[] | null = null;
  arr: any;
  errors = false;

  loading = true;
  history$ = this.store.select(getHistory);

  isFetchingHistory$ = merge(
    this.actions$.pipe(
      ofType(loadCourse),
      map(() => true)
    ),
    this.actions$.pipe(
      ofType(loadCorseSuccess),
      map(() => false)
    ),
    this.actions$.pipe(
      ofType(loadCourseFailure),
      map(() => false)
    )
  );

  constructor(private authServer: AuthService,
    private actions$: Actions,
    private router: Router,
    private store: Store) {
  }
  ngOnInit(): any {
    this.store.dispatch( loadCourse())
    setTimeout(() => {
      this.history$.subscribe({
        next: (value: any | null) => {
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
    }, 1000)

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