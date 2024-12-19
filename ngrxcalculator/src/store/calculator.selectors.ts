import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CalculatorState } from "./calculator.state";

export const selectCalculatorState = createFeatureSelector<CalculatorState>('calculator')

export const selectDisplay = createSelector(selectCalculatorState, (s: CalculatorState) => s.display)