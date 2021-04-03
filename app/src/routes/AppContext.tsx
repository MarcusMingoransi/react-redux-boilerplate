import React from 'react'
import { themeLight } from '../shared/Theme'

export const AppContext = React.createContext({
  theme: {
    currentTheme: themeLight,
    themeName: 'light',
  },
  toggleTheme: () => {},
})
