import React from 'react';
import { CloseOutlined } from '@ant-design/icons';

import { TagProps } from './Tag.types';
import { Container, Text, Remove, Tags } from './Tag.styles';

const Tag = ({ isReadonly, text, removeTag }: TagProps): React.ReactElement => {
  const handleRemoveTag = () => {
    if (removeTag) {
      removeTag();
    }
  };

  return (
    <Container>
      <Text>{text}</Text>
      {!isReadonly && (
        <Remove onClick={handleRemoveTag}>
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
