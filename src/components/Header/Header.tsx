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
  const { i18n, t } = useTranslation();
  const { toggleTheme, theme } = useTheme();

  const [isPopoverActive, setIsPopoverActive] = useState(false);

  const toggleLanguage = (lang: string) => {
    localStorage.setItem('language', lang);
    i18n.changeLanguage(lang);
  };

  const handleChangeVisiblePopover = () => {
    setIsPopoverActive(!isPopoverActive);
  };

  const popoverContent = (
    <PopoverContainer>
      <PopoverItem>
        <FiMoon />
        {t('header.darkTheme')}

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
            <img src={FlagBR} alt={t('header.flags.brazil')} />
          </FlagButton>
          <FlagButton type="button" onClick={() => toggleLanguage('en')}>
            <img src={FlagUSA} alt={t('header.flags.united')} />
          </FlagButton>
        </FlagsContainer>
      </LanguageContainer>

      <Container>
        <Link to="/">
          <SiteName>{t('siteName')}</SiteName>
        </Link>

        <MenuContainer>
          <MenuItem>
            <Link to="/contact">{t('header.menu.contact')}</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/contact">{t('header.menu.contact')}</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/contact">{t('header.menu.contact')}</Link>
          </MenuItem>

          <SettingsButton type="button">
            <Popover
              content={popoverContent}
              title={t('header.settings')}
              trigger="click"
              visible={isPopoverActive}
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
