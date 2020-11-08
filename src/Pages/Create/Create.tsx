import React, { useState } from 'react';

import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';

import { Container, Title, Form } from './Create.styles';

const Create = (): React.ReactElement => {
  const [value, setValue] = useState('');

  return (
    <Container>
      <Title>Contribute to the TwitchDoodles copypasta database.</Title>

      <Form autoComplete="off">
        <Input
          name="name"
          placeholder="Doodle's name"
          value={value}
          onChange={val => setValue(val)}
        />
        <TextArea
          name="name"
          placeholder="Doodle's name"
          value={value}
          onChange={val => setValue(val)}
        />
      </Form>
    </Container>
  );
};

export default Create;
