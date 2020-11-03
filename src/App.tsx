import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppProvider from './hooks';

import GlobalStyles from './styles/GlobalStyles';
import Routes from './routes';

const App = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes />
        <GlobalStyles />
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
