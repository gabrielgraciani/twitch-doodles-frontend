import React from 'react';

import { HeartProps } from './Heart.types';
import { HeartIcon } from './Heart.styles';

const Heart = ({ active, onClick }: HeartProps): React.ReactElement => {
  return <HeartIcon active={active} onClick={onClick} />;
};

export default Heart;
