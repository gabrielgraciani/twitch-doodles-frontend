import React from 'react';

import Routes from '../routes';
import { Header } from '../components/Header';

import { Container } from './Layout.styles';

const Layout = (): React.ReactElement => {
  return (
    <Container>
      <Header />
      <Routes />
    </Container>
  );
};

export default Layout;
