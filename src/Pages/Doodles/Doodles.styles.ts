import styled from 'styled-components';

const Container = styled.div`
  width: 90%;
  max-width: 110rem;
  padding: 2rem 0;
`;

const CardsContainer = styled.div`
  padding: 2rem 0;

  column-count: 3;
  column-gap: 1.5rem;
  column-fill: auto;
`;

const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const FilterItem = styled.div`
  width: 20rem;

  :last-child {
    margin-left: 1.5rem;
  }
`;

export { Container, CardsContainer, FilterContainer, FilterItem };
