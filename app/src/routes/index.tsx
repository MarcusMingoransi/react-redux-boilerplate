import React, { Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router'
// import Home from '../modules/shared/Home'
// import NoMatch from '../modules/shared/NoMatch'

const Home = lazy(() => import('../modules/shared/Home'))
const NoMatch = lazy(() => import('../modules/shared/NoMatch'))

const routes = (
  <Suspense fallback="loading">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NoMatch} />
    </Switch>
  </Suspense>
)

export default routes