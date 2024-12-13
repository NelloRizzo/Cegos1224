//import { initialState, addDigit, addZero, addComma, execute, reset, clearError } from "./statemanager.js"
import StateManager from "./statemanager.js";
document.addEventListener('DOMContentLoaded', () => {
    var _a, _b;
    let state = StateManager.initialState;
    const updateDisplay = (text) => {
        const display = document.getElementById('display');
        display.innerText = text;
    };
    (_a = document.getElementById('reset')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        state = StateManager.reset(state);
        updateDisplay(state.display);
    });
    (_b = document.getElementById('clear-error')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
        state = StateManager.clearError(state);
        updateDisplay(state.display);
    });
    Array.from(document.getElementsByClassName('zero'))
        .forEach(d => d.addEventListener('click', () => {
        state = StateManager.addZero(state);
        updateDisplay(state.display);
    }));
    Array.from(document.getElementsByClassName('comma'))
        .forEach(d => d.addEventListener('click', () => {
        state = StateManager.addComma(state);
        updateDisplay(state.display);
    }));
    Array.from(document.getElementsByClassName('digit'))
        .forEach(d => {
        d.addEventListener('click', (e) => {
            if (e.target instanceof Element) {
                const digit = e.target.getAttribute("data-id");
                state = StateManager.addDigit(state, Number.parseInt(digit));
                updateDisplay(state.display);
            }
        });
    });
    Array.from(document.getElementsByClassName('op'))
        .forEach(d => {
        d.addEventListener('click', (e) => {
            if (e.target instanceof Element) {
                const operation = e.target.getAttribute("data-op");
                state = StateManager.execute(state, operation);
                updateDisplay(state.display);
            }
        });
    });
});
