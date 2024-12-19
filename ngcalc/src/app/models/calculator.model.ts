export interface Calculator {
    display: string
    accumulator: number
    nextOperation: string
    clearDisplay: boolean
}


export const initialState: Calculator = {
    display: '0,0',
    accumulator: 0,
    nextOperation: '=',
    clearDisplay: true
}