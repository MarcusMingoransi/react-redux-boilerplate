import { CLICK_ADD, CLICK_SUB } from "../types";

export const clickAddAction = (value: number) => {
    return {
        type: CLICK_ADD,
        counter: value
    }
}

export const clickSubAction = (value: number) => {
    return {
        type: CLICK_SUB,
        counter: value
    }
}