import { CLICK_ADD, CLICK_SUB, CLICK_SET_DARK, CLICK_SET_lIGHT } from "../types";

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

export const setDarkThemeAction = (value: any) => {
    return {
        type: CLICK_SET_DARK,
        theme: value
    }
}

export const setLightThemeAction = (value: any) => {
    return {
        type: CLICK_SET_lIGHT,
        theme: value
    }
}