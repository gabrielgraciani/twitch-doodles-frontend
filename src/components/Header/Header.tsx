import React from 'react';
import { useTranslation } from 'react-i18next';

import FlagUSA from '../../assets/images/flags/USA.png';
import FlagBR from '../../assets/images/flags/BR.png';

import {
  Container,
  SiteName,
  ContentContainer,
  MenuContainer,
  MenuItem,
  FlagsContainer,
  FlagButton,
} from './Header.styles';

const Header = (): React.ReactElement => {
  const { i18n } = useTranslation();

  return (
    <Container>
      <SiteName>Twitch Doodles</SiteName>

      <ContentContainer>
        <MenuContainer>
          <MenuItem>teste</MenuItem>
        </MenuContainer>

        <FlagsContainer>
          <FlagButton type="button" onClick={() => i18n.changeLanguage('br')}>
            <img src={FlagBR} alt="Brasil" />
          </FlagButton>
          <FlagButton type="button" onClick={() => i18n.changeLanguage('en')}>
            <img src={FlagUSA} alt="United States Of America" />
          </FlagButton>
        </FlagsContainer>
      </ContentContainer>
    </Container>
  );
};

export default Header;
