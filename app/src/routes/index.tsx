import React, { Suspense, lazy, useState } from 'react'
import { Route, Switch } from 'react-router'
import { ThemeProvider, createMuiTheme, MuiThemeProvider, Button, CssBaseline } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { PaletteColor } from '@material-ui/core/styles/createPalette'
// import Home from '../modules/shared/Home'
// import NoMatch from '../modules/shared/NoMatch'

const Home = lazy(() => import('../modules/shared/Home'))
const NoMatch = lazy(() => import('../modules/shared/NoMatch'))
const Example = lazy(() => import('../modules/shared/Example'))

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    backgroundCard: PaletteColorOptions;
  }
  interface PaletteOptions {
    backgroundCard: PaletteColor;
  }
}

const customTheme = {
  primary: {
    light: '#BD96FF',
    main: '#673AB7',
    dark: '#A678F5'
  },
  secondary: {
    light: '#b5b8cf',
    main: '#777da7',
    dark: '#51567b'
  },
  warning: {
    main: '#F9F871'
  },
  error: {
    main: '#FF6F91'
  },
}

const themeLight = createMuiTheme({
  palette: {
    background: {
      default: "#fafafa",
      paper: "#e0e0e0"
    },
    text: {
      primary: "#000000"
    },
    backgroundCard: {
      light: "#fafafa",
      main: "#f5f5f5",
      dark: "#eeeeee",
      contrastText: ""
    },
    ...customTheme
  }
});

const themeDark = createMuiTheme({
  palette: {
    background: {
      default: "#212121",
      paper: "616161"
    },
    text: {
      primary: "#ffffff"
    },
    backgroundCard: {
      light: "#616161",
      main: "#424242",
      dark: "#212121",
      contrastText: ""
    },
    ...customTheme
  }
});



const RoutesTheme = () => {
  // const theme = React.useMemo(
  //   () =>
  //     createMuiTheme({
  //       palette: {
  //         type: 'dark',
  //         primary: {
  //           main: '#a86cc1',
  //           light: '',
  //           dark: ''
  //         },
  //         secondary: {
  //           main: '#89609e',
  //           light: '',
  //           dark: ''
  //         },
  //         background: {
  //           default: '#000000',
  //           paper: '#000000'
  //         }
  //       },
  //     }),
  //   [],
  // )
  const themeReducer = useSelector((state: any) => state.themeReducer)
  console.log('Routes: themeReducer', themeReducer)

  // const [light, setLight] = useState(true);

  return(
    // <MuiThemeProvider theme={light ? themeLight : themeDark}>
    <MuiThemeProvider theme={themeReducer ? themeLight : themeDark}>
      <CssBaseline />
      {/* <Button onClick={() => setLight(prev => !prev)}>Toggle Theme</Button> */}
      <Suspense fallback="loading">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/example" component={Example} />
          <Route component={NoMatch} />
        </Switch>
      </Suspense>
    </MuiThemeProvider>
    // <ThemeProvider theme={theme}>
    //   <Suspense fallback="loading">
    //     <Switch>
    //       <Route exact path="/" component={Home} />
    //       <Route exact path="/example" component={Example} />
    //       <Route component={NoMatch} />
    //     </Switch>
    //   </Suspense>
    // </ThemeProvider>
  )
}

const routes = (
  // <Suspense fallback="loading">
  //   <Switch>
  //     <Route exact path="/" component={Home} />
  //     <Route exact path="/example" component={Example} />
  //     <Route component={NoMatch} />
  //   </Switch>
  // </Suspense>
  <RoutesTheme />
)

export default routes