import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 25rem;
  border: 0.1rem solid ${props => props.theme.colors.inputBorderColor};
  border-radius: 0.4rem;
  position: relative;
  transition: border-color 0.15s ease;

  &.mouseEnter {
    border-color: ${props => props.theme.colors.primary};
  }
  &.mouseActive {
    border-color: ${props => props.theme.colors.inputBorderColorActive};
  }
`;

const StyledInput = styled.input`
  width: 100%;
  background: transparent;
  font-size: 1.4rem;
  padding: 1rem 0.8rem;
`;

const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 0.8rem;
  transform: translate(0%, -50%);
  pointer-events: none;
  background: ${props => props.theme.colors.background};
  transition: top 0.15s ease, font-size 0.15s ease;
  font-size: 1.4rem;
  padding-right: 0.5rem;

  &.mouseActive {
    top: 0%;
    color: ${props => props.theme.colors.inputBorderColorActive};
    font-size: 1.1rem;
  }

  &.hasValue {
    top: 0%;
    font-size: 1.1rem;
  }
`;

export { Container, StyledInput, Label };
