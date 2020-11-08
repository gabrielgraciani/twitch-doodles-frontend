import React from 'react';

import { StyledButton } from './Button.styles';
import { ButtonProps } from './Button.types';

const Button = ({ children, onClick }: ButtonProps): React.ReactElement => {
  return (
    <StyledButton type="button" onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
