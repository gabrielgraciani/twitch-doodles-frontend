import React from 'react';
import { useTranslation } from 'react-i18next';

import { Header } from '../../components/Header';

const Home = (): React.ReactElement => {
  const { t } = useTranslation();
  return (
    <div>
      <Header />
      {t('welcome.title')}
    </div>
  );
};

export default Home;
