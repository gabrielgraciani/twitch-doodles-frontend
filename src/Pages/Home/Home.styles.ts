import styled, { keyframes } from 'styled-components';
import { FiPlusSquare } from 'react-icons/fi';

const Container = styled.div`
  width: 90%;
  max-width: 110rem;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(32rem, 1fr));
  justify-content: space-between;
  grid-row-gap: 2rem;
  grid-column-gap: 1.5%;
  padding: 2rem 0;
  overflow: hidden;
`;

const ContainerViewMore = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContainerViewMoreText = styled.div`
  text-align: center;
`;

const OnLoad = keyframes`
  to {
    transform: translateY(0);
    opacity:1;
  }
`;

const PlusIcon = styled(FiPlusSquare)`
  width: 10rem;
  height: 10rem;
  stroke-width: 0.1rem;

  fill: ${props => props.theme.colors.cardBackground};

  transform: translateY(-5rem);
  opacity: 0;
  animation: ${OnLoad} 0.5s ease 0.7s forwards;
`;

export {
  Container,
  CardsContainer,
  ContainerViewMore,
  ContainerViewMoreText,
  PlusIcon,
};
