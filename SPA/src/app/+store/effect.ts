import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType} from '@ngrx/effects';
import { provideState, Store } from "@ngrx/store";
import { catchError, from, map, mergeMap, switchMap, timeout, timer, withLatestFrom } from "rxjs";
import { IAppState } from ".";
import { AuthService } from "../auth/auth.service";
import { addCourse, loadCorseSuccess, loadCourse, loadCourseFailure } from "./actions";

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
    constructor( private actions$: Actions,private auth: AuthService,private store: Store<IAppState>,) {

    }
    // saveCourse = createEffect(
    //     () =>
    //       this.actions$.pipe(
    //         ofType(addCourse),
    //         withLatestFrom(this.store.select(loadCourse)),
    //         switchMap(([action, courses]) =>
    //          from(this.auth.createMyCourse(courses)))
    //       ),
    //     // Most effects dispatch another action, but this one is just a "fire and forget" effect
    //     { dispatch: false }
    //   );
}
// saveTodos$ = createEffect(
//   () =>
//     this.actions$.pipe(
//       ofType(addTodo, removeTodo),
//       withLatestFrom(this.store.select(selectAllTodos)),
//       switchMap(([action, todos]) => from(this.todoService.saveTodos(todos)))
//     ),
//   // Most effects dispatch another action, but this one is just a "fire and forget" effect
//   { dispatch: false }
// );