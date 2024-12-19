import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.reducer";

export const selectorCounterState = createFeatureSelector<CounterState>('count')
export const selectorCounter = createSelector(selectorCounterState, (s: CounterState) => s.count)