import React from 'react';

import Routes from '../routes';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import { Container, Content } from './Layout.styles';

const Layout = (): React.ReactElement => {
  return (
    <Container>
      <Header />
      <Content>
        <Routes />
      </Content>
      <Footer />
    </Container>
  );
};

export default Layout;
