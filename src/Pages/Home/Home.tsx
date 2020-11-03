import React from 'react';
import { useTranslation } from 'react-i18next';

import FlagUSA from '../../assets/images/flags/USA.png';
import FlagBR from '../../assets/images/flags/BR.png';

const Home = (): React.ReactElement => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      {t('welcome.title')}
      <br />
      <br />
      <button type="button" onClick={() => i18n.changeLanguage('br')}>
        <img src={FlagBR} alt="Brasil" />
      </button>
      <br />
      <button type="button" onClick={() => i18n.changeLanguage('en')}>
        <img src={FlagUSA} alt="United States Of America" />
      </button>
    </div>
  );
};

export default Home;
