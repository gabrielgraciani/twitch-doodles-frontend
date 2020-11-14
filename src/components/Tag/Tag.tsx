import React from 'react';
import { CloseOutlined } from '@ant-design/icons';

import { TagProps } from './Tag.types';
import { Container, Text, Remove, Tags } from './Tag.styles';

const Tag = ({ isReadonly, text }: TagProps): React.ReactElement => {
  return (
    <Container>
      <Text>{text}</Text>
      {!isReadonly && (
        <Remove>
          <CloseOutlined />
        </Remove>
      )}
    </Container>
  );
};

Tag.Tags = Tags;

Tag.defaultProps = {
  isReadonly: true,
};

export default Tag;
