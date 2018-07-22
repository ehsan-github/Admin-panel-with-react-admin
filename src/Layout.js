import { connect } from 'react-redux';
import { Layout } from 'react-admin';
import { merge } from 'ramda'

const darkTheme = {
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
};

const lightTheme = {
  direction: 'rtl',
  palette: {
    primary: {
      light: '#5f5fc4',
      main: '#3f51b5',
      dark: '#ff00aa',
    },
    secondary: {
      light: '#5f5fc4',
      main: '#3f51b5',
      dark: '#001064',
      contrastText: '#fff',
    },
  },
};

const generalTheme = {
  typography: {
    fontFamily: 'iransans'
  }
};

export default connect(
  state => ({
    theme: state.theme === 'dark' ? merge(generalTheme, darkTheme) : merge(generalTheme, lightTheme),
  }),
  {}
)(Layout);
