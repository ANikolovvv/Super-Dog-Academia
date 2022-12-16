import { Injectable } from "@angular/core";

import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Store } from "@ngrx/store";
import { catchError,  map, switchMap} from "rxjs";
import { IAppState } from ".";
import { AuthService } from "../auth/auth.service";
import { loadCorseSuccess, loadCourse, loadCourseFailure } from "./actions";

@Injectable({
    providedIn: 'root'
})

export class Effect {

    getCourse = createEffect(() =>

        this.actions$.pipe(
            ofType(loadCourse),
            switchMap(
                () => this.auth.getMyCourse().pipe(
                    map(courses => loadCorseSuccess({courses})),
                    catchError(error => [loadCourseFailure({ error })])
                ))
        ))
    
     
    constructor(private actions$: Actions, private auth: AuthService, private store: Store<IAppState>) { }
}
