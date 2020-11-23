import React from 'react';
import { Link } from 'react-router-dom';

import useCopyPastasPopular from '../../hooks/useCopyPastasPopular';

import { CopyPasta } from '../../components/CopyPasta';
import { Loading } from '../../components/Loading';

import {
  Container,
  CardsContainer,
  ContainerViewMore,
  ContainerViewMoreText,
  PlusIcon,
} from './Home.styles';

const Home = (): React.ReactElement => {
  const { data: copyPastasPopular, isLoading } = useCopyPastasPopular();

  return (
    <Container>
      {isLoading ? (
        <Loading.Container align="flex-start">
          <Loading />
        </Loading.Container>
      ) : (
        <CardsContainer>
          {copyPastasPopular?.map((copyPasta, index) => (
            <CopyPasta key={copyPasta.id} index={index} copyPasta={copyPasta} />
          ))}

          <ContainerViewMore>
            <ContainerViewMoreText>
              <Link to="/doodles">
                <PlusIcon />
              </Link>
            </ContainerViewMoreText>
          </ContainerViewMore>
        </CardsContainer>
      )}
    </Container>
  );
};

export default Home;
