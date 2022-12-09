import { ActionReducerMap, createReducer, on } from "@ngrx/store";
import { routerReducer } from '@ngrx/router-store';
import { addCourse, loadCorseSuccess, loadCourse } from "./actions";

export interface IMainState {
    courses: null | any[];
    history:any

}

export interface IAppState {
    main: IMainState;
    router: ReturnType<typeof routerReducer>
}
const mainInitialState: IMainState = {
    courses: null,
    history:null

}
const mainReducer = createReducer<IMainState>(
    mainInitialState,

    on(loadCorseSuccess, (state: any, { courses }: any) => {
      
        return { ...state,courses,history:courses,};
    }),
    on(addCourse, (state: any, value:any) => {
        const {history}=state
        let num=0
        console.log(state , 'addCoursestate')
        console.log(value, 'addCorsevalue',history)
        return { ...state,history:[history,value]};
    }),
  
   
)
// on(addTodo, (state, { content }) => ({
//     ...state,
//     todos: [...state.todos, { id: Date.now().toString(), content: content }],
//   })),
export const reducers: ActionReducerMap<IAppState> = {
    main: mainReducer,
    router: routerReducer,
};