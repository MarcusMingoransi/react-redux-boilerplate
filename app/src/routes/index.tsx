import React, { Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router'
import { MuiThemeProvider, CssBaseline } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { themeLight, themeDark } from '../shared/Theme'

const Home = lazy(() => import('../modules/shared/Home'))
const NoMatch = lazy(() => import('../modules/shared/NoMatch'))
const Example = lazy(() => import('../modules/shared/Example'))

const RoutesTheme = () => {
  const themeReducer = useSelector((state: any) => state.themeReducer)
  console.log('Routes: themeReducer', themeReducer)

  return (
    <MuiThemeProvider theme={themeReducer ? themeLight : themeDark}>
      <CssBaseline />
      <Suspense fallback='loading'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/example' component={Example} />
          <Route component={NoMatch} />
        </Switch>
      </Suspense>
    </MuiThemeProvider>
  )
}

const routes = <RoutesTheme />

export default routes
