import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <GlobalStyles
      styles={{
        body: {
          backgroundColor: '#e5e5e5',
          fontFamily: 'Nunito',
        },
      }}
    />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();