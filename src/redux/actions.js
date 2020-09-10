import {ASYNC_INC, DECREMENT, INCREMENT} from "./types";

export function increment() {
    return {
        type: INCREMENT
    }
}

export function decrement() {
    return {
        type: DECREMENT
    }
}

export function asyncInc() {
    return function (dispatch) {
        setTimeout(() => {
            dispatch({ type: ASYNC_INC })
        }, 2000)
    }
}
