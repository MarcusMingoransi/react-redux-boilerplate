import React, { Suspense, lazy, useState } from 'react'
import { Route, Switch } from 'react-router'
import { MuiThemeProvider, CssBaseline } from '@material-ui/core'
import { themeLight, themeDark } from '../shared/Theme'
import { AppContext } from './AppContext'

const Home = lazy(() => import('../modules/shared/Home'))
const NoMatch = lazy(() => import('../modules/shared/NoMatch'))
const Example = lazy(() => import('../modules/shared/Example'))

const RoutesTheme = () => {
  const [theme, setTheme] = useState({
    currentTheme: themeLight,
    themeName: 'light',
  })

  const toggleTheme = () => {
    theme.themeName === 'light'
      ? setTheme({ currentTheme: themeDark, themeName: 'dark' })
      : setTheme({ currentTheme: themeLight, themeName: 'light' })
  }

  return (
    <AppContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
      <MuiThemeProvider
        theme={theme.themeName === 'light' ? themeLight : themeDark}
      >
        <CssBaseline />
        <Suspense fallback='loading'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/example' component={Example} />
            <Route component={NoMatch} />
          </Switch>
        </Suspense>
      </MuiThemeProvider>
    </AppContext.Provider>
  )
}

const routes = <RoutesTheme />

export default routes
