import { Action, createReducer, on } from "@ngrx/store";
import { increment, decrement, reset } from "./counter.actions";

export interface CounterState {
    count: number
}

export const initialState: CounterState = { count: 0 }

const _counterReducer = createReducer(
    initialState,
    on(increment, state => ({ ...state, count: (state.count + 1) % 10 })),
    on(decrement, state => ({ ...state, count: state.count - 1 })),
    on(reset, state => ({ ...state, count: 0 }))
)

export function counterReducer(state: CounterState | undefined, action: Action) {
    return _counterReducer(state, action)
}