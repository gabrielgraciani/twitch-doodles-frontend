import styled from 'styled-components';

const StyledButton = styled.button`
  width: auto;
  min-width: 20rem;
  padding: 1rem 1rem;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.purpleLight};
  border-radius: 3rem;
  transition: background-color 0.2s ease, border-color 0.2s ease;

  &:hover {
    background-color: ${props => props.theme.colors.purpleLight};
    border-color: ${props => props.theme.colors.purple};
  }

  &:active {
    background: ${props => props.theme.colors.purple};
  }
`;

export { StyledButton };
