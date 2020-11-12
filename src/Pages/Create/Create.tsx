import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import api from '../../services/api';
import { setImage, setThreshHold, CreateAscii } from '../../utils/CreateAscii';
import CopyToClipboard from '../../utils/CopyToClipboard';
import { useToast } from '../../hooks/useToast';

import {
  Container,
  CreateHeader,
  Title,
  SimpleDoodle,
  Form,
  FormItem,
  ContainerError,
  ErrorMessage,
  ChooseImageContainer,
  ChooseImageText,
  ChooseImageInput,
  InputTreshold,
  ContentDoodle,
  ContainerDoodle,
  StyledCopyToClipboard,
} from './Create.styles';

const Create = (): React.ReactElement => {
  const [nameValue, setNameValue] = useState('');
  const [contentValue, setContentValue] = useState('');
  const [isSimpleDoodle, setIsSimpleDoodle] = useState(false);
  const [asciiArt, setAsciiArt] = useState('');
  const [rangeValue, setRangeValue] = useState(127);
  const [hasImage, setHasImage] = useState<HTMLImageElement>();
  const [isActiveCopyToClipboard, setIsActiveCopyToClipboard] = useState(false);
  const [isCopyingToClipboard, setIsCopyingToClipboard] = useState(false);
  const [hasContentError, setHasContentError] = useState(false);
  const [hasAsciiContentError, setHasAsciiContentError] = useState(false);

  const { t } = useTranslation();

  const { addToast } = useToast();

  const handleChangeSimpleDoodle = () => {
    setIsSimpleDoodle(!isSimpleDoodle);
  };

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const image = new Image();
    if (e.target.files && e.target.files[0]) {
      image.src = URL.createObjectURL(e.target.files[0]);
      image.onload = async () => {
        setImage(image);
        setHasImage(image);
        const ascii = CreateAscii();
        setAsciiArt(ascii);
      };
    }
  };

  const handleChangeThreshHold = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (hasImage) {
      setRangeValue(parseInt(e.target.value, 10));
      setThreshHold(parseInt(e.target.value, 10));

      const ascii = CreateAscii();
      setAsciiArt(ascii);
    }
  };

  const handleChangeActiveCopyToClipboard = () => {
    setIsActiveCopyToClipboard(!isActiveCopyToClipboard);
  };

  const handleCopyToClipboard = (content: string) => {
    CopyToClipboard({ content, isCopyingToClipboard, setIsCopyingToClipboard });
  };

  const asciiConverted = asciiArt
    .replaceAll(/\n|\r/g, '')
    .replaceAll('<br />', '\n')
    .replaceAll('<span>', '')
    .replaceAll('</span>', '');

  const handleSubmitForm = async () => {
    if (!contentValue && !asciiConverted) {
      if (isSimpleDoodle) {
        setHasContentError(true);
      } else {
        setHasAsciiContentError(true);
      }
    } else {
      const response = await api.post('/copypastas', {
        name: nameValue,
        content: isSimpleDoodle ? contentValue : asciiConverted,
        date: new Date(),
      });

      if (response.status === 200) {
        setHasContentError(false);
        setHasAsciiContentError(false);
        setAsciiArt('');
        setRangeValue(127);
        setHasImage(undefined);

        addToast({
          type: 'success',
          title: 'Criado com sucesso',
          description: 'Você já pode vê-lo na lista de desenhos',
        });
      } else {
        addToast({
          type: 'error',
          title: 'Erro ao criar',
          description: 'Tente novamente mais tarde',
        });
      }
    }
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
              error={hasContentError}
              errorMessage={t('pages.create.field_required', {
                field: t('pages.create.content'),
              })}
            />
          </FormItem>
        ) : (
          <>
            <FormItem>
              <ContainerError>
                <ChooseImageContainer>
                  <ChooseImageText htmlFor="upload">
                    Choose an Image
                  </ChooseImageText>
                  <ChooseImageInput
                    type="file"
                    id="upload"
                    onChange={handleChangeImage}
                  />
                </ChooseImageContainer>
                {hasAsciiContentError && (
                  <ErrorMessage>
                    {t('pages.create.field_required', {
                      field: t('pages.create.image'),
                    })}
                  </ErrorMessage>
                )}
              </ContainerError>
            </FormItem>

            <FormItem>
              <InputTreshold
                type="range"
                id="threshold"
                min="0"
                max="255"
                value={rangeValue}
                onChange={handleChangeThreshHold}
              />
            </FormItem>

            <FormItem>
              <ContainerDoodle
                onMouseEnter={handleChangeActiveCopyToClipboard}
                onMouseLeave={handleChangeActiveCopyToClipboard}
                onClick={() => handleCopyToClipboard(asciiConverted)}
              >
                <ContentDoodle
                  id="output"
                  dangerouslySetInnerHTML={{ __html: asciiArt }}
                />

                <StyledCopyToClipboard
                  className={isActiveCopyToClipboard ? 'active' : ''}
                >
                  {isCopyingToClipboard
                    ? t('copyPasta.copiedToClipboard')
                    : t('copyPasta.copyToClipboard')}
                </StyledCopyToClipboard>
              </ContainerDoodle>
            </FormItem>
          </>
        )}

        <Button onClick={handleSubmitForm}>{t('pages.create.create')}</Button>
      </Form>
    </Container>
  );
};

export default Create;
