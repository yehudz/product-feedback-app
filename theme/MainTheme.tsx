import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Jost',
    ].join(','),
    h1: {
      fontSize: '24px',
      lineHeight: '35px',
      letterSpacing: '-0.33px',
      fontWeight: 'bold'
    },
    h2: {
      fontSize: '20px',
      lineHeight: '29px',
      letterSpacing: '-0.25px',
      fontWeight: 'bold',
      color: ''
    },
    h3: {
      fontSize: '18px',
      lineHeight: '26px',
      letterSpacing: '-0.25px',
      fontWeight: 'bold'
    },
    h4: {
      fontSize: '14px',
      lineHeight: '20px',
      letterSpacing: '-0.2px',
      fontWeight: 'bold'
    },
    body1: {
      fontSize: '16px',
      lineHeight: '23px',
      fontWeight: 'regular'
    },
    body2: {
      fontSize: '15px',
      lineHeight: '22px',
      fontWeight: '100'
    },
    subtitle1: {
      fontSize: '13px',
      lineHeight: '19px',
      fontWeight: 'semibold'
    }
  },
  palette: {
    primary: {
      light: '#F49F85',
      main: '#AD1FEA',
    },
    secondary: {
      light: '#62BCFA',
      main: '#4661E6',
      dark: '#000000'
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