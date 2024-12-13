interface State {
    display: string
    accumulator: number
    mustClearDisplay: boolean
    nextOperation: string
}

const initialState: State = {
    display: '0.0',
    accumulator: 0,
    mustClearDisplay: true,
    nextOperation: '='
}

type Action = (state: State) => State
type ActionWithPayload<T> = (state: State, data: T) => State

const checkClear: (s: State) => State = (s) => {
    if (s.mustClearDisplay) {
        s.display = ''
        s.mustClearDisplay = false
    }
    return s
}

const addDigit: ActionWithPayload<number> =
    (s, d) => {
        s = checkClear(s)
        s.display += d.toString()
        return s
    }

const addZero: Action = (s) => {
    s = checkClear(s)
    if (s.display.length > 0)
        s.display += '0'
    else {
        s.display = '0.0'
        s.mustClearDisplay = true
    }
    return s
}

const addComma: Action = (s) => {
    s = checkClear(s)
    if (s.display.indexOf('.') < 0)
        s.display += '.'
    return s
}

const execute: ActionWithPayload<string> = (s, o) => {
    const value = Number.parseFloat(s.display)
    switch (s.nextOperation) {
        case '+':
            s.accumulator += value
            break;
        case '-':
            s.accumulator -= value
            break;
        case '*':
            s.accumulator *= value;
            break;
        case '/':
            s.accumulator /= value;
            break;
        case '^':
            s.accumulator **= value;
            break;
        default:
            s.accumulator = value
    }
    s.display = s.accumulator.toString()
    s.nextOperation = o
    s.mustClearDisplay = true
    return s
}

export { initialState, addComma, addZero, addDigit, execute }