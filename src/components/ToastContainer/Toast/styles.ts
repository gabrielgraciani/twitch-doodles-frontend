import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ContainerProps {
  type?: 'success' | 'error' | 'info';
  description: string | undefined;
}

const toastTypeVariations = {
  info: css`
    background: ${props => props.theme.colors.toastInfoBackground};
  `,
  success: css`
    background: ${props => props.theme.colors.toastSuccessBackground};
  `,
  error: css`
    background: ${props => props.theme.colors.toastErrorBackground};
  `,
};

const toastColorsVariations = {
  info: css`
    color: ${props => props.theme.colors.toastInfoColor};
  `,
  success: css`
    color: ${props => props.theme.colors.toastSuccessColor};
  `,
  error: css`
    color: ${props => props.theme.colors.toastErrorColor};
  `,
};

const Container = styled(animated.div)<ContainerProps>`
  width: 36rem;
  position: relative;
  padding: 1.6rem 3rem;
  border-radius: 1rem;
  box-shadow: 0.2rem 0.2rem 0.8rem rgba(0, 0, 0, 0.2);
  display: flex;

  * {
    ${props => toastColorsVariations[props.type || 'info']}
  }

  & + div {
    margin-top: 0.8rem;
  }

  ${props => toastTypeVariations[props.type || 'info']}

  > svg {
    margin: 0.4rem 1.2rem 0 0;
  }

  ${props =>
    !props.description &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;

const TextContainer = styled.div`
  flex: 1;
`;

const Text = styled.p`
  margin-top: 0.4rem;
  font-size: 1.4rem;
  opacity: 0.8;
  line-height: 2rem;
  margin-bottom: 0;
`;

const Button = styled.button`
  position: absolute;
  right: 1.6rem;
  top: 1.9rem;
  opacity: 0.6;
  border: 0;
  background: transparent;
  color: inherit;
`;

export { Container, TextContainer, Text, Button };
