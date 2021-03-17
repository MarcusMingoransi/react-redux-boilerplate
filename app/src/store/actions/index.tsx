import { CLICK_ADD, CLICK_SUB, CLICK_SET_THEME } from '../types'

export const clickAddAction = (value: number) => {
  return {
    type: CLICK_ADD,
    counter: value,
  }
}

export const clickSubAction = (value: number) => {
  return {
    type: CLICK_SUB,
    counter: value,
  }
}

export const setThemeAction = (value: any) => {
  return {
    type: CLICK_SET_THEME,
    theme: value,
  }
}
