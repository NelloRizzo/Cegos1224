import { Action, createReducer, on } from "@ngrx/store";
import { CalculatorState, initialState } from "./calculator.state";
import { commaClicked, digitClicked, operatorClicked } from "./calculator.actions";

const handleDigit = (s: CalculatorState, d: number): CalculatorState => {
    let state = { ...s }
    if (state.mustClearDisplay) state.display = ''
    if (d === 0) {
        if (state.display.length > 0) state.display += '0'
    }
    else
        state.display += d.toString()
    state.mustClearDisplay = false
    return state
}

const handleComma = (s: CalculatorState): CalculatorState => {
    if (s.display.indexOf(',') < 0)
        return { ...s, display: s.display + ',' }
    return s
}

const handlOperator = (s: CalculatorState, op: string): CalculatorState => {
    let accumulator = s.accumulator
    let value = Number.parseFloat(s.display.replace(',', '.'))
    switch (s.nextOperator) {
        case '+': accumulator += value; break;
        case '-': accumulator -= value; break;
        case '*': accumulator *= value; break;
        case '/': accumulator /= value; break;
        default: accumulator = value; break;
    }
    return { ...s, accumulator: accumulator, display: accumulator.toString(), nextOperator: op, mustClearDisplay: true }
}
const _reducer = createReducer(
    initialState,
    //on(digitClicked, (s, { digit }) => handleDigit(s, digit)),
    on(digitClicked, (s, props) => handleDigit(s, props.digit)),
    on(commaClicked, s => handleComma(s)),
    on(operatorClicked, (s, { op }) => handlOperator(s, op))
)

export function calculatorReducer(state: CalculatorState | undefined, a: Action) { return _reducer(state, a) }