import React, { useState } from 'react';

import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import api from '../../services/api';

import { Container, Title, Form, FormItem } from './Create.styles';

const Create = (): React.ReactElement => {
  const [nameValue, setNameValue] = useState('');
  const [contentValue, setContentValue] = useState('');

  const handleSubmitForm = async () => {
    const teste = await api.post('/copypastas', {
      name: nameValue,
      content: contentValue,
      date: new Date(),
    });

    console.log('teste', teste);
  };

  return (
    <Container>
      <Title>Contribute to the TwitchDoodles copypasta database.</Title>

      <Form autoComplete="off">
        <FormItem>
          <Input
            name="name"
            placeholder="Doodle's name (optional)"
            value={nameValue}
            onChange={val => setNameValue(val)}
          />
        </FormItem>

        <FormItem>
          <TextArea
            name="name"
            placeholder="Doodle's content"
            value={contentValue}
            onChange={val => setContentValue(val)}
          />
        </FormItem>

        <Button onClick={handleSubmitForm}>Create</Button>
      </Form>
    </Container>
  );
};

export default Create;
