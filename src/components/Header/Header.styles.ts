import styled, { createGlobalStyle } from 'styled-components';

const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 0.1rem 0.2rem ${props => props.theme.colors.boxShadow02},
    0 0 0.2rem ${props => props.theme.colors.boxShadow02};

  background: ${props => props.theme.colors.backgroundHeader};
  position: fixed;
  top: 0;
  left: 0;

  z-index: 999;
`;

const LanguageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  background: ${props => props.theme.colors.purpleLight};
`;

const Container = styled.div`
  width: 90%;
  max-width: 110rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SiteName = styled.h4`
  color: ${props => props.theme.colors.purple};
  font-size: 2rem;
`;

const MenuContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
`;

const MenuItem = styled.li`
  font-size: 1.7rem;
  color: ${props => props.theme.colors.primary};
  margin-right: 3rem;
  padding: 1rem 0;
  border-bottom: 1px solid transparent;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: ${props => props.theme.colors.purpleLight};
    border-bottom: 1px solid ${props => props.theme.colors.purpleLight};
  }

  a {
    padding: 1rem 0;
  }
`;

const FlagsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 90%;
  padding: 0.3rem 0rem;
  max-width: 110rem;
`;

const FlagButton = styled.button`
  margin-right: 2rem;

  &:last-child {
    margin-right: 0;
  }

  img {
    width: 2.5rem;
  }
`;

const SettingsButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 2rem;
  }
`;

const PopoverContainer = styled.div``;

const PopoverItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > svg {
    font-size: 2rem;
    margin-right: 0.8rem;
  }
`;

const PopoverGlobalStyles = createGlobalStyle`
.ant-popover-inner{
  background: ${props => props.theme.colors.backgroundHeader};
  svg path{color:${props => props.theme.colors.primary};}

  box-shadow: 0 0.1rem 0.2rem ${props =>
    props.theme.colors.boxShadow02}, 0 0 0.2rem ${props =>
  props.theme.colors.boxShadow02};
}

.ant-popover-title{
  color: ${props => props.theme.colors.primary};
}

.ant-switch{
  background:${props => props.theme.colors.purpleLight};
  margin-left:5rem;
}

.ant-switch-checked{
  background: ${props => props.theme.colors.purple};
}

.ant-popover-arrow{
  border-top-color: ${props =>
    props.theme.title === 'dark'
      ? `${props.theme.colors.purpleLight} !important`
      : '#fff'};
  border-left-color: ${props =>
    props.theme.title === 'dark'
      ? `${props.theme.colors.purpleLight} !important`
      : '#fff'};
}


`;

export {
  Header,
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
};
