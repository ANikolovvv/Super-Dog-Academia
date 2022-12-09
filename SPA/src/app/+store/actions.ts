import { createAction, props } from "@ngrx/store";
import { IOrder } from "../interfaces/order";

const actioTypes = {
    loadCourse: 'CREATE_COURSE',
    loadCourseSuccess: 'LOAD_COURSE_SUCCESS',
    loadCourseFailure: 'LOAD_COURSE_FAILURE',
    addCourse: "ADD_COURSE"
};

export const loadCourse = createAction(actioTypes.loadCourse);
export const loadCorseSuccess = createAction(actioTypes.loadCourseSuccess,props<{ courses: any}>());
export const loadCourseFailure = createAction(actioTypes.loadCourseFailure, props<{ error: any }>());
export const addCourse = createAction(actioTypes.addCourse,props<{ history: any }>());