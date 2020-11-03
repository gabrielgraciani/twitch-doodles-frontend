import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SiteName = styled.h4`
  width: 20%;
`;

const ContentContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MenuContainer = styled.ul``;

const MenuItem = styled.li``;

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
