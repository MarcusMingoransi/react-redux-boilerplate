import { createMuiTheme } from "@material-ui/core";

export const customTheme = {
    global: {
        font: {
            family: "Roboto",
            size: "14px",
            height: "10px"
        },
        colors: {
            // Overriding existing grommet colors
            brand: "#4D4CDB",
            "dark-1": "#000000",
            "light-1": "#f8f8f8",
            "accent-1": "#797979",
            "accent-2": "#d7d7d7",
            "accent-3": "#5c5c5c",
            "accent-4": "#9FFFB0",
            "neutral-1": "#10873D",
            "neutral-2": "#20873D",
            "neutral-3": "#30873D",
            "neutral-4": "#40873D",
            focus: "#000",
            // Setting new colors
            primary: "#d515d3",
            primaryLighter: "#f2b9f2",
            primaryDarker: "#c40cc2",
            // you can also point to existing grommet colors
            brightGreen: "accent-1",
            deepGreen: "neutral-2",
        },
    }
  }

export const darkTheme = {
global: {
    font: {
        family: "Roboto",
        size: "14px",
        height: "10px"
    },
    colors: {
        "dark-1": "#f8f8f8",
        "light-1": "#000000",
        "accent-1": "#797979",
        "accent-2": "#d7d7d7",
        "accent-3": "#5c5c5c",
        "accent-4": "#9FFFB0",
        "neutral-1": "#10873D",
        "neutral-2": "#20873D",
        "neutral-3": "#30873D",
        "neutral-4": "#40873D",
        focus: "#000",
        // Setting new colors
        primary: "#d515d3",
        primaryLighter: "#f2b9f2",
        primaryDarker: "#c40cc2",
        // you can also point to existing grommet colors
        brightGreen: "accent-1",
        deepGreen: "neutral-2",
    }
}
}

export const themeLight = createMuiTheme({
    palette: {
      background: {
        default: "#e4f0e2"
      },
      primary: {
        main: '#a86cc1',
        light: '',
        dark: ''
      },
      secondary: {
        main: '#89609e',
        light: '',
        dark: ''
      },
    }
  });

  export const themeDark = createMuiTheme({
    palette: {
      background: {
        default: "#222222"
      },
      text: {
        primary: "#ffffff"
      },
      primary: {
        main: '#a86cc1',
        light: '',
        dark: ''
      },
      secondary: {
        main: '#89609e',
        light: '',
        dark: ''
      },
    }
  });