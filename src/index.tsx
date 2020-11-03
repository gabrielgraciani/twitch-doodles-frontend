import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import App from './App';
import reportWebVitals from './reportWebVitals';

import i18next from './configs/i18n';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>loading...</div>}>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
