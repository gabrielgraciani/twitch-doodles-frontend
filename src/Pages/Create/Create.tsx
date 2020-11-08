import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import api from '../../services/api';

import {
  Container,
  CreateHeader,
  Title,
  SimpleDoodle,
  Form,
  FormItem,
} from './Create.styles';

const Create = (): React.ReactElement => {
  const [nameValue, setNameValue] = useState('');
  const [contentValue, setContentValue] = useState('');
  const [isSimpleDoodle, setIsSimpleDoodle] = useState(false);

  const { t } = useTranslation();

  const handleChangeSimpleDoodle = () => {
    setIsSimpleDoodle(!isSimpleDoodle);
  };

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
      <CreateHeader>
        <Title>{t('pages.create.title')}</Title>

        <SimpleDoodle>
          {t('pages.create.simpleDoodle')}
          <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            defaultChecked={isSimpleDoodle}
            onClick={handleChangeSimpleDoodle}
          />
        </SimpleDoodle>
      </CreateHeader>

      <Form autoComplete="off">
        <FormItem>
          <Input
            name="name"
            placeholder="Doodle's name (optional)"
            value={nameValue}
            onChange={val => setNameValue(val)}
          />
        </FormItem>

        {isSimpleDoodle ? (
          <FormItem>
            <TextArea
              name="name"
              placeholder="Doodle's content"
              value={contentValue}
              onChange={val => setContentValue(val)}
            />
          </FormItem>
        ) : (
          <FormItem>colocar aqui o negocio doido</FormItem>
        )}

        <Button onClick={handleSubmitForm}>Create</Button>
      </Form>
    </Container>
  );
};

export default Create;
