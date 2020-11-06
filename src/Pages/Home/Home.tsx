import React from 'react';
import { ReactQueryDevtools } from 'react-query-devtools';

import useCopyPastas from '../../hooks/useCopyPastas';

import { Card } from '../../components/Card';
import { Container, CardsContainer } from './Home.styles';

const Home = (): React.ReactElement => {
  const { data: copyPastas } = useCopyPastas();

  return (
    <Container>
      <CardsContainer>
        {copyPastas?.map(copyPasta => (
          <Card
            key={copyPasta.id}
            name={copyPasta.name}
            content={copyPasta.content}
            date={copyPasta.date}
          />
        ))}
      </CardsContainer>

      <ReactQueryDevtools initialIsOpen={false} />
    </Container>
  );
};

export default Home;
