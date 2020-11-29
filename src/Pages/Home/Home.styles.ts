import styled from 'styled-components';

const Container = styled.div`
  width: 90%;
  max-width: 110rem;
  padding: 2rem 0;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(32rem, 1fr));
  justify-content: space-between;
  grid-row-gap: 2rem;
  grid-column-gap: 1.5%;
  padding: 2rem 0;
  overflow: hidden;

  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fill, minmax(32rem, 50rem));
    justify-content: center;
  }
`;

const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const FilterItem = styled.div`
  width: 20rem;
  margin-right: 1.5rem;

  :last-child {
    margin-right: 0;
  }
`;

const NoRegister = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 3rem;
`;

export { Container, CardsContainer, FilterContainer, FilterItem, NoRegister };
