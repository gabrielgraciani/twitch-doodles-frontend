import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  //box-shadow: 0 1px 2px rgba(0, 0, 0, 0.9), 0 0 2px rgba(0, 0, 0, 0.9) !important;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2), 0 0 2px rgba(0, 0, 0, 0.2);

  background: ${props => props.theme.colors.backgroundHeader};
`;

const SiteName = styled.h4`
  width: 20%;
  color: #6441a5;
  font-size: 2rem;
`;

const ContentContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MenuContainer = styled.ul``;

const MenuItem = styled.li`
  font-size: 1.7rem;
  color: ${props => props.theme.colors.primary};
`;

const FlagsContainer = styled.div`
  display: flex;
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

export {
  Container,
  SiteName,
  ContentContainer,
  MenuContainer,
  MenuItem,
  FlagsContainer,
  FlagButton,
};
