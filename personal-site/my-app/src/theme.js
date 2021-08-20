import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    // secondary: {
    //   main: "#909090",
    // },
    background: {
      default: "#210031"
    }
  },

  typography: {
    fontFamily: `"Space Mono", monospace`,
  }
});

export default theme;