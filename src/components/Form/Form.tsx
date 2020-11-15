import React from 'react';

import { FormProps } from './Form.types';
import { StyledForm, FormItem } from './Form.styles';

const Form = ({ children }: FormProps): React.ReactElement => {
  return <StyledForm autoComplete="off">{children}</StyledForm>;
};

Form.FormItem = FormItem;

export default Form;
