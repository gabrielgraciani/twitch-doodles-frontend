import React from 'react';

import AppProvider from './hooks';

import GlobalStyles from './styles/GlobalStyles';
import { Home } from './Pages/Home';

const App = (): React.ReactElement => {
  return (
    <AppProvider>
      <Home />
      <GlobalStyles />
    </AppProvider>
  );
};

export default App;
