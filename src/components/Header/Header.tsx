import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Popover, Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

import { FiSettings, FiMoon } from 'react-icons/fi';
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
  PopoverContainer,
  PopoverItem,
  PopoverGlobalStyles,
} from './Header.styles';

const Header = (): React.ReactElement => {
  const { i18n } = useTranslation();
  const { toggleTheme, theme } = useTheme();
  console.log('theme', theme);

  const [isActive, setIsActive] = useState(false);

  const toggleLanguage = (lang: string) => {
    localStorage.setItem('language', lang);
    i18n.changeLanguage(lang);
  };

  const handleChangeVisiblePopover = () => {
    setIsActive(!isActive);
  };

  const popoverContent = (
    <PopoverContainer>
      <PopoverItem>
        <FiMoon />
        <span>Tema escuro</span>

        <Switch
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
          defaultChecked={theme.title === 'dark'}
          onClick={toggleTheme}
        />
      </PopoverItem>
    </PopoverContainer>
  );

  return (
    <StyledHeader>
      <LanguageContainer>
        <FlagsContainer>
          <FlagButton type="button" onClick={() => toggleLanguage('br')}>
            <img src={FlagBR} alt="Brasil" />
          </FlagButton>
          <FlagButton type="button" onClick={() => toggleLanguage('en')}>
            <img src={FlagUSA} alt="United States Of America" />
          </FlagButton>
        </FlagsContainer>
      </LanguageContainer>

      <Container>
        <Link to="/">
          <SiteName>Twitch Doodles</SiteName>
        </Link>

        <MenuContainer>
          <MenuItem>
            <Link to="/contact">Classic</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/contact">ASCII</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/contact">Contact</Link>
          </MenuItem>

          <SettingsButton type="button">
            <Popover
              content={popoverContent}
              title="Configurações"
              trigger="click"
              visible={isActive}
              placement="bottomRight"
              onVisibleChange={handleChangeVisiblePopover}
            >
              <FiSettings />
            </Popover>
          </SettingsButton>
        </MenuContainer>
      </Container>

      <PopoverGlobalStyles />
    </StyledHeader>
  );
};

export default Header;
