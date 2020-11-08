import React from 'react';

import { StyledButton } from './Button.styles';
import { ButtonProps } from './Button.types';

const Button = ({ children }: ButtonProps): React.ReactElement => {
  return <StyledButton type="button">{children}</StyledButton>;
};

export default Button;
