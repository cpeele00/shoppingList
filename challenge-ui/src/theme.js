import { createTheme } from '@mui/material/styles';
import { GlobalStyles } from '@mui/material';

/*
  I've never used Material-UI before so I am certain there are
  better ways to handle custom "themes". 
*/

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Nunito',
          textTransform: 'initial',
          fontSize: '14px',
        },
      },
    },
  },
});

export const customGlobalStyles = (
  <GlobalStyles
    styles={{
      body: {
        fontFamily: ['"Nunito"', 'Open Sans'].join(','),
      },
      h1: {
        fontFamily: 'Dosis',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '18px',
        lineHeight: '23px',
        letterSpacing: '0.25px',
        textTransform: 'uppercase',
      },
      h2: {
        fontFamily: 'Nunito',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '18px',
        lineHeight: '24px',
        letterSpacing: '-1.30385e-9px',
        color: '#2a323c',
      },
      h3: {
        fontFamily: 'Nunito',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        lineHeight: '22px',
        letterSpacing: '-1.30385e-9px',
        color: '#5c6269',
      },
    }}
  />
);
