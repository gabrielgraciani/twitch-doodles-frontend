import React from 'react';
import { useTranslation } from 'react-i18next';

import { Header } from '../../components/Header';

const Home = (): React.ReactElement => {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <div style={{ marginTop: '82px' }}>{t('welcome.title')}</div>
    </>
  );
};

export default Home;
