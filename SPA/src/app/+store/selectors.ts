import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IMainState } from './index';

const mainSelector = createFeatureSelector<IMainState>('main');
export const selectHistory =createSelector (mainSelector,s=> s.history);
export const getHistory = createSelector(mainSelector, s => s.courses);
