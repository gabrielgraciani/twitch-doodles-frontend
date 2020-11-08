import React, { useState } from 'react';

import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';

import { Container, Title, Form, FormItem } from './Create.styles';

const Create = (): React.ReactElement => {
  const [value, setValue] = useState('');

  return (
    <Container>
      <Title>Contribute to the TwitchDoodles copypasta database.</Title>

      <Form autoComplete="off">
        <FormItem>
          <Input
            name="name"
            placeholder="Doodle's name (optional)"
            value={value}
            onChange={val => setValue(val)}
          />
        </FormItem>

        <FormItem>
          <TextArea
            name="name"
            placeholder="Doodle's content"
            value={value}
            onChange={val => setValue(val)}
          />
        </FormItem>

        <Button>Create</Button>
      </Form>
    </Container>
  );
};

export default Create;
