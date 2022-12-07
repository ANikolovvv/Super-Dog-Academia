import { ActionReducerMap, createReducer, on } from "@ngrx/store";
import { routerReducer } from '@ngrx/router-store';
import { loadCorseSuccess } from "./actions";

export interface IMainState {
    courses: null | any[];
    
}

interface IAppState {
    main: IMainState;
    router: ReturnType<typeof routerReducer>
}
const mainInitialState: IMainState = {
    courses: null,
   
}
const mainReducer = createReducer<IMainState>(
    mainInitialState,
   
    on(loadCorseSuccess, (state:any, { courses}:any) => {
        console.log({courses},'state')
        return { ...state, courses };
    })
)

export const reducers: ActionReducerMap<IAppState> = {
    main: mainReducer,
    router: routerReducer,
};