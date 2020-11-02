import React from 'react';

import GlobalStyles from './styles/GlobalStyles';
import { Home } from './Pages/Home';

const App = (): React.ReactElement => {
  return (
    <>
      <Home />
      <GlobalStyles />
    </>
  );
};

export default App;
