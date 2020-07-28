import { CLICK_ADD, CLICK_SUB } from "../types";

export const counterReducer = (state: number = 0, action: any) => {
    console.log('state', state)
    console.log('action', action)
    switch(action.type) {
    case CLICK_ADD:
        return state + action.counter
    case CLICK_SUB:
        return state - action.counter
    default:
        return state;
    }
}