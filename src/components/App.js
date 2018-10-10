import React, { Component } from 'react';
import { injectGlobal, ThemeProvider } from 'styled-components';
import { themeDefault } from './themes/default';

import { Provider } from 'react-redux';
import store from '../store';
import Routes from '../routes';

injectGlobal`
  body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Rubik;
      font-size: 18px;
  }
`;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={themeDefault}>
          <Routes />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
