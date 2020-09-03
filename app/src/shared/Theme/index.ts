import { createMuiTheme } from "@material-ui/core";

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

export const themeLight = createMuiTheme({
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

export const themeDark = createMuiTheme({
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
