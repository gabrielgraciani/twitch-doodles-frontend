import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  //box-shadow: 0 1px 2px rgba(0, 0, 0, 0.9), 0 0 2px rgba(0, 0, 0, 0.9) !important;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2), 0 0 2px rgba(0, 0, 0, 0.2);

  background: ${props => props.theme.colors.backgroundHeader};
  position: fixed;
  top: 0;
  left: 0;
`;

const LanguageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  background: #b9a3e3;
`;

const Container = styled.div`
  width: 90%;
  max-width: 100rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 10rem;
`;

const SiteName = styled.h4`
  color: #6441a5;
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

  &:last-child {
    margin-right: 0;
  }
`;

const FlagsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 90%;
  padding: 0.3rem 10rem;
  max-width: 100rem;
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
  svg {
    font-size: 2.5rem;
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
};
