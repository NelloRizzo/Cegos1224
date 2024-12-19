export interface CalculatorState {
    display: string
    accumulator: number
    nextOperator: string
    mustClearDisplay: boolean
}

export const initialState: CalculatorState = {
    display: '0',
    accumulator: 0,
    nextOperator: '=',
    mustClearDisplay: true
}