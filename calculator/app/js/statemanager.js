const initialState = {
    display: '0.0',
    accumulator: 0,
    mustClearDisplay: true,
    nextOperation: '='
};
const checkClear = (s) => {
    if (s.mustClearDisplay) {
        s.display = '';
        s.mustClearDisplay = false;
    }
    return s;
};
const addDigit = (s, d) => {
    s = checkClear(s);
    s.display += d.toString();
    return s;
};
const addZero = (s) => {
    s = checkClear(s);
    if (s.display.length > 0)
        s.display += '0';
    else {
        s.display = '0.0';
        s.mustClearDisplay = true;
    }
    return s;
};
const addComma = (s) => {
    s = checkClear(s);
    if (s.display.indexOf('.') < 0)
        s.display += '.';
    return s;
};
const execute = (s, o) => {
    var _a;
    const value = Number.parseFloat(s.display);
    switch (s.nextOperation) {
        case '+':
            s.accumulator += value;
            break;
        case '-':
            s.accumulator -= value;
            break;
        case '*':
            s.accumulator *= value;
            break;
        case '/':
            s.accumulator /= value;
            break;
        case '^':
            (_a = s).accumulator = Math.pow(_a.accumulator, value);
            break;
        default:
            s.accumulator = value;
    }
    s.display = s.accumulator.toString();
    s.nextOperation = o;
    s.mustClearDisplay = true;
    return s;
};
export { initialState, addComma, addZero, addDigit, execute };
