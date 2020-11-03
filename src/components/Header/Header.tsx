import React from 'react';
import { useTranslation } from 'react-i18next';

import { MdSettings } from 'react-icons/md';
import FlagUSA from '../../assets/images/flags/USA.png';
import FlagBR from '../../assets/images/flags/BR.png';

import { useTheme } from '../../hooks/useTheme';

import {
  Header as StyledHeader,
  LanguageContainer,
  Container,
  SiteName,
  MenuContainer,
  MenuItem,
  FlagsContainer,
  FlagButton,
  SettingsButton,
} from './Header.styles';

const Header = (): React.ReactElement => {
  const { i18n } = useTranslation();
  const { toggleTheme } = useTheme();

  return (
    <StyledHeader>
      <LanguageContainer>
        <FlagsContainer>
          <FlagButton type="button" onClick={() => i18n.changeLanguage('br')}>
            <img src={FlagBR} alt="Brasil" />
          </FlagButton>
          <FlagButton type="button" onClick={() => i18n.changeLanguage('en')}>
            <img src={FlagUSA} alt="United States Of America" />
          </FlagButton>
        </FlagsContainer>
      </LanguageContainer>

      <Container>
        <SiteName>Twitch Doodles</SiteName>

        <MenuContainer>
          <MenuItem>Classic</MenuItem>
          <MenuItem>ASCII</MenuItem>
          <MenuItem>Contact</MenuItem>

          <SettingsButton type="button" onClick={toggleTheme}>
            <MdSettings />
          </SettingsButton>
        </MenuContainer>
      </Container>
    </StyledHeader>
  );
};

export default Header;
