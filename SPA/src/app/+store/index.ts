import { ActionReducerMap, createReducer, on } from "@ngrx/store";
import { routerReducer } from '@ngrx/router-store';
import { loadCorseSuccess } from "./actions";

export interface IMainState {
    courses: null | any[];
}
export interface IAppState {
    main: IMainState;
    router: ReturnType<typeof routerReducer>
}
const mainInitialState: IMainState = {
    courses: null,


}
const mainReducer = createReducer<IMainState>(
    mainInitialState,

    on(loadCorseSuccess, (state: any, { courses }: any) => {
        let history = courses.history
        console.log(courses, history, 'Load courses')
        return { ...state, courses };
    }),



)

export const reducers: ActionReducerMap<IAppState> = {
    main: mainReducer,
    router: routerReducer,
};