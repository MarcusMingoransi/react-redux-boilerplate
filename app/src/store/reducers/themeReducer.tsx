import { CLICK_SET_THEME } from "../types";

export const themeReducer = (state: any = true, action: any) => {
    console.log('theme: state', state)
    console.log('theme: action', action)
    switch(action.type) {
    case CLICK_SET_THEME:
        return action.theme
    default:
        return state;
    }
}