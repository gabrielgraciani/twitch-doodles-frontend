import React from 'react';

import { Container, Item, ContainerParent } from './Loading.styles';

const Loading = (): React.ReactElement => {
  return (
    <Container className="lds-roller">
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </Container>
  );
};

Loading.Container = ContainerParent;

export default Loading;
