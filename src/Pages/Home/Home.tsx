import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = (): React.ReactElement => {
  const { t, i18n } = useTranslation('common');
  return (
    <div>
      {t('welcome.title')}
      <br />
      <br />
      <button type="button" onClick={() => i18n.changeLanguage('br')}>
        br
      </button>
      <br />
      <button type="button" onClick={() => i18n.changeLanguage('en')}>
        en
      </button>
    </div>
  );
};

export default Home;
