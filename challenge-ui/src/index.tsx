import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import store from './redux/configureStore';
import { theme, customGlobalStyles } from './theme';
import AppErrorBoundary from './common/app/AppErrorBoundary';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {customGlobalStyles}
      <AppErrorBoundary>
        <Provider store={store}>
          <CssBaseline />
          <App />
        </Provider>
      </AppErrorBoundary>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
