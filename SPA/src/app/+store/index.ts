import { ActionReducerMap, createReducer, on } from "@ngrx/store";
import { routerReducer } from '@ngrx/router-store';
import { addCourse, loadCorseSuccess, loadCourse } from "./actions";

export interface IMainState {
    courses: null | any[];
    history: any

}

export interface IAppState {
    main: IMainState;
    router: ReturnType<typeof routerReducer>
}
const mainInitialState: IMainState = {
    courses: null,
    history: null

}
const mainReducer = createReducer<IMainState>(
    mainInitialState,

    on(loadCorseSuccess, (state: any, { courses }: any) => {
        console.log(courses, 'Load courses')
        return { ...state, courses, history: courses, };
    }),
    on(addCourse, (state: any, value: any) => {
        const { history } = state;
        const { courses } = state;

        console.log(courses, 'addCoursestate', state)
        console.log(value, 'addCorsevalue', history)
        return { ...state, courses: [courses, value], history: [history, value] };
    }),


)

export const reducers: ActionReducerMap<IAppState> = {
    main: mainReducer,
    router: routerReducer,
};