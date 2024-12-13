//import { initialState, addDigit, addZero, addComma, execute, reset, clearError } from "./statemanager.js"
import StateManager from "./statemanager.js"

document.addEventListener('DOMContentLoaded', () => {
    let state = StateManager.initialState

    const updateDisplay = (text: string) => {
        const display = document.getElementById('display')!
        display.innerText = text
    }

    document.getElementById('reset')?.addEventListener('click', () => {
        state = StateManager.reset(state)
        updateDisplay(state.display)
    })
    document.getElementById('clear-error')?.addEventListener('click', () => {
        state = StateManager.clearError(state)
        updateDisplay(state.display)
    })
    Array.from(document.getElementsByClassName('zero'))
        .forEach(d => d.addEventListener('click', () => {
            state = StateManager.addZero(state)
            updateDisplay(state.display)
        }))
    Array.from(document.getElementsByClassName('comma'))
        .forEach(d => d.addEventListener('click', () => {
            state = StateManager.addComma(state)
            updateDisplay(state.display)
        }))

    Array.from(document.getElementsByClassName('digit'))
        .forEach(d => {
            d.addEventListener('click', (e) => {
                if (e.target instanceof Element) {
                    const digit = e.target.getAttribute("data-id")!
                    state = StateManager.addDigit(state, Number.parseInt(digit))
                    updateDisplay(state.display)
                }
            })
        })
    Array.from(document.getElementsByClassName('op'))
        .forEach(d => {
            d.addEventListener('click', (e) => {
                if (e.target instanceof Element) {
                    const operation = e.target.getAttribute("data-op")!
                    state = StateManager.execute(state, operation)
                    updateDisplay(state.display)
                }
            })
        })
})