import React from 'react';
import { ReactQueryDevtools } from 'react-query-devtools';

import useCopyPastas from '../../hooks/useCopyPastas';

import { CopyPasta } from '../../components/CopyPasta';
import { Container, CardsContainer } from './Home.styles';

const Home = (): React.ReactElement => {
  const { data: copyPastas } = useCopyPastas();

  return (
    <Container>
      <CardsContainer>
        {copyPastas?.map(copyPasta => (
          <CopyPasta key={copyPasta.id} copyPasta={copyPasta} />
        ))}
      </CardsContainer>

      <ReactQueryDevtools initialIsOpen={false} />
    </Container>
  );
};

export default Home;
