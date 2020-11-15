import styled from 'styled-components';

const Container = styled.div`
  width: 90%;
  max-width: 110rem;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(32rem, 1fr));
  justify-content: space-between;
  grid-row-gap: 2.5rem;
  grid-column-gap: 3%;
  padding: 2rem 0;
`;

export { Container, CardsContainer };
