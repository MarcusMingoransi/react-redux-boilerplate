import { CLICK_SET_DARK, CLICK_SET_lIGHT } from "../types";
import { customTheme, darkTheme } from "../../shared/Theme";

export const themeReducer = (state: any = customTheme, action: any) => {
    console.log('theme: state', state)
    console.log('theme: action', action)
    switch(action.type) {
    case CLICK_SET_DARK:
        return darkTheme
    case CLICK_SET_lIGHT:
        return customTheme
    default:
        return state;
    }
}