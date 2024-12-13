import { initialState, addDigit, addZero, addComma, execute } from "./statemanager.js";
document.addEventListener('DOMContentLoaded', () => {
    let state = initialState;
    const updateDisplay = (text) => {
        const display = document.getElementById('display');
        display.innerText = text;
    };
    Array.from(document.getElementsByClassName('zero'))
        .forEach(d => d.addEventListener('click', () => {
        state = addZero(state);
        updateDisplay(state.display);
    }));
    Array.from(document.getElementsByClassName('comma'))
        .forEach(d => d.addEventListener('click', () => {
        state = addComma(state);
        updateDisplay(state.display);
    }));
    Array.from(document.getElementsByClassName('digit'))
        .forEach(d => {
        d.addEventListener('click', (e) => {
            if (e.target instanceof Element) {
                const digit = e.target.getAttribute("data-id");
                state = addDigit(state, Number.parseInt(digit));
                updateDisplay(state.display);
            }
        });
    });
    Array.from(document.getElementsByClassName('op'))
        .forEach(d => {
        d.addEventListener('click', (e) => {
            if (e.target instanceof Element) {
                const operation = e.target.getAttribute("data-op");
                state = execute(state, operation);
                updateDisplay(state.display);
            }
        });
    });
});
