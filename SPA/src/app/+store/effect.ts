import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType} from '@ngrx/effects';
import { provideState } from "@ngrx/store";
import { catchError, map, mergeMap, switchMap, timeout, timer } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { loadCorseSuccess, loadCourse, loadCourseFailure } from "./actions";

@Injectable({
    providedIn: 'root'
})


export class Effect {
    
    createCourse = createEffect(() =>
       
        this.actions$.pipe(
            ofType(loadCourse),
            mergeMap(
                () => this.auth.getMyCourse().pipe(
                map(courses =>  loadCorseSuccess({courses})),
                catchError(error => [loadCourseFailure({ error })])
            ))
        ))
    constructor( private actions$: Actions,private auth: AuthService) {

    }
}
// loadMovies$ = createEffect(() => this.actions$.pipe(
//     ofType('[Movies Page] Load Movies'),
//     mergeMap(() => this.moviesService.getAll()
//       .pipe(
//         map(movies => ({ type: '[Movies API] Movies Loaded Success', payload: movies })),
//         catchError(() => EMPTY)
//       ))
//     )
//   );

// loadUsers = createEffect(() => this.actions$.pipe(
//     ofType(loadUsers),
//     switchMap(({ filter }) => this.userService.loadUsers(filter).pipe(
//       map(users => loadUsersSuccess({ users })),
//       catchError(error => [loadUsersFailure({ error })])
//     ))
//   ))

//   constructor(private actions$: Actions, private userService: UserService) { }