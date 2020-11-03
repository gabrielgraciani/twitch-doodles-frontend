import React from 'react';
import { useTranslation } from 'react-i18next';

import { MdSettings } from 'react-icons/md';
import FlagUSA from '../../assets/images/flags/USA.png';
import FlagBR from '../../assets/images/flags/BR.png';

import { useTheme } from '../../hooks/useTheme';

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
  const { toggleTheme } = useTheme();

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

      <button type="button" onClick={toggleTheme}>
        <MdSettings />
      </button>
    </Container>
  );
};

export default Header;
