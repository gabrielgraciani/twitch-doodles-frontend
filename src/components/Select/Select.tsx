import React from 'react';

import { SelectProps } from './Select.types';
import { SelectContainer, Option } from './Select.styles';

const Select = ({
  children,
  onChange,
  value,
}: SelectProps): React.ReactElement => {
  return (
    <SelectContainer onChange={onChange} value={value}>
      {children}
    </SelectContainer>
  );
};

Select.Option = Option;

export default Select;
