import React from 'react';
// import { ReactQueryDevtools } from 'react-query-devtools';

import useCopyPastas from '../../hooks/useCopyPastas';

import { CopyPasta } from '../../components/CopyPasta';
import { Container, CardsContainer, SearchContainer } from './Doodles.styles';

const Doodles = (): React.ReactElement => {
  const { data: copyPastas } = useCopyPastas();

  return (
    <Container>
      <SearchContainer>search</SearchContainer>
      <CardsContainer>
        {copyPastas?.map(copyPasta => (
          <CopyPasta key={copyPasta.id} copyPasta={copyPasta} />
        ))}
      </CardsContainer>

      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </Container>
  );
};

export default Doodles;
