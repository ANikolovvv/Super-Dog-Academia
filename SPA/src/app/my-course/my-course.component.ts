import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, merge } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { IOrder } from '../interfaces/course';
import { Store } from '@ngrx/store';
import { loadCourse, loadCorseSuccess, loadCourseFailure } from '../+store/actions';
import { getHistory } from '../+store/selectors';
import { Actions, ofType } from '@ngrx/effects';




@Component({
  selector: 'app-my-course',
  templateUrl: './my-course.component.html',
  styleUrls: ['./my-course.component.scss', './responsive.component.scss']
})
export class MyCourseComponent implements OnInit {


  info: boolean = false
  courses: IOrder[] | null = null;
  arr: any;
  errors = false;
  count: number = 0;
  loading: boolean = true;

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
    
    this.store.dispatch(loadCourse())
    this.dataHandler()
  }
  dataHandler() {
    setTimeout(() => {
      this.history$.subscribe({
        next: (value: any) => {
          this.info = value.history ? value.history.length === 0 : value.length === 0;
          this.loading = !this.loading;
          this.arr = value.history

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
        this.store.dispatch(loadCourse())
        this.loading = true
      },
      error: (err: any) => {
        console.error(err);
      }
    })

  }
}