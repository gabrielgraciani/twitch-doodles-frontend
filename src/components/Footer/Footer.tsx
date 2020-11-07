import React from 'react';
import { getYear } from 'date-fns';
import { useTranslation } from 'react-i18next';

import { Container, CopyRight, Contact } from './Footer.styles';

const Footer = (): React.ReactElement => {
  const { t } = useTranslation();

  const year = getYear(new Date());

  return (
    <Container>
      <CopyRight>{t('footer.copyRight', { year })}</CopyRight>
      <Contact
        href="https://www.linkedin.com/in/gabriel-thomaz-graciani-98400b166/"
        target="_blank"
        rel="noreferrer"
      >
        {t('footer.createdBy', { interpolation: { escapeValue: false } })}
      </Contact>
    </Container>
  );
};

export default Footer;
