import { configureStore } from "@reduxjs/toolkit";
import tombolaReducer from './State'

const store = configureStore({
    reducer: {
        tombola: tombolaReducer
    }
})

export default store
