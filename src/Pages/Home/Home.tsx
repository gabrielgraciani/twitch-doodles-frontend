import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = (): React.ReactElement => {
  const { t } = useTranslation();
  return <div>{t('welcome.title')}</div>;
};

export default Home;
