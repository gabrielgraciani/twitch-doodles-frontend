import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppProvider from './hooks';

import GlobalStyles from './styles/GlobalStyles';
import { Layout } from './Layout';

const App = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Layout />
        <GlobalStyles />
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
