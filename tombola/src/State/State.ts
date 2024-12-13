import { createSlice } from "@reduxjs/toolkit";

import NumbersBag from "./NumbersBag";

export interface State {
    drawn: Array<number>
    lastDraw?: number
}

const numbers: NumbersBag = new NumbersBag()

const initialState: State = {
    drawn: [],
}

const tombolaSlice = createSlice({
    name: 'tombola',
    initialState,
    reducers: {
        drawNumber: (state: State) => {
            state.lastDraw = numbers.getNext()
            state.drawn = [...state.drawn, state.lastDraw]
            return state
        }
    }
})

export const { drawNumber } = tombolaSlice.actions
export default tombolaSlice.reducer