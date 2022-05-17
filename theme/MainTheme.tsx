import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Jost',
    ].join(','),
  },
  palette: {
    primary: {
      light: '#F49F85',
      main: '#AD1FEA',
    },
    secondary: {
      light: '#62BCFA',
      main: '#4661E6',
    },
    info: {
      light: '#fff',
      main: '#F7F8FD',
      dark: '#F2F4FF'
    },
    warning: {
      main: '#F49F85',
      dark: '#D73737'
    },
    success: {
      light: '#647196',
      main: '#3A4374',
      dark: '#373F68'
    }
  },
});

export default theme