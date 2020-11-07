import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors.purpleLight};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0;
`;

const CopyRight = styled.div`
  color: ${props => props.theme.colors.secundary};
  font-size: 1.2rem;
`;

const Contact = styled.a`
  color: ${props => props.theme.colors.secundary};
  font-size: 1.2rem;
`;

export { Container, CopyRight, Contact };
