import {ASYNC_INC, DECREMENT, INCREMENT} from "./types";

export function rootReducer(state, action) {
    if (action.type === INCREMENT) {
        return state + 1;
    } else if (action.type === DECREMENT) {
        return state - 1;
    } else if (action.type === ASYNC_INC) {
        return  state + 1;
    }

    return state;
}