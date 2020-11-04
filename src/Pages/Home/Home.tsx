import React from 'react';

import { Card } from '../../components/Card';

import { Container, CardsContainer } from './Home.styles';

const Home = (): React.ReactElement => {
  return (
    <Container>
      <CardsContainer>
        {Array.from(Array(5).keys()).map(() => (
          <Card />
        ))}
      </CardsContainer>
    </Container>
  );
};

export default Home;
