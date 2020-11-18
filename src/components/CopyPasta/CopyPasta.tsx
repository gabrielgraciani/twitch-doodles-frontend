import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import { ptBR, enUS } from 'date-fns/locale';

import CopyToClipboard from '../../utils/CopyToClipboard';
import { Tag } from '../Tag';

import { CopyPastaProps } from './CopyPasta.types';

import api from '../../services/api';

import {
  StyledCopyPasta,
  CopyPastaHeader,
  CopyPastaLikeContainer,
  CopyPastaContent,
  CopyPastaFooter,
  UserName,
  StyledCopyToClipboard,
  CopyPastaDate,
} from './CopyPasta.styles';

const Card = ({ copyPasta }: CopyPastaProps): React.ReactElement => {
  const [isActiveCopyToClipboard, setIsActiveCopyToClipboard] = useState(false);
  const [isCopyingToClipboard, setIsCopyingToClipboard] = useState(false);
  const language = localStorage.getItem('language');

  const { t } = useTranslation();

  const handleChangeActiveCopyToClipboard = () => {
    setIsActiveCopyToClipboard(!isActiveCopyToClipboard);
  };

  const handleCopyToClipboard = (content: string) => {
    CopyToClipboard({ content, isCopyingToClipboard, setIsCopyingToClipboard });
  };

  const categoriesSplitted = copyPasta.categories.split(',');

  const formatDateText =
    language === 'br' ? "iiii',' dd 'de' MMMM 'de' y" : "iiii',' MMMM dd',' y";

  const date = format(new Date(copyPasta.date), formatDateText, {
    locale: language === 'br' ? ptBR : enUS,
  });

  const handleLike = async (id: string) => {
    const response = await api.post(`/copypastas/like/${id}`);
    console.log('response', response);
    if (response.status === 200) {
      // eslint-disable-next-line no-param-reassign
      copyPasta.likes = response.data.likes;
    }
  };

  const handleUnlike = async (id: string) => {
    const response = await api.post(`/copypastas/unlike/${id}`);
    console.log('response', response);
    if (response.status === 200) {
      // eslint-disable-next-line no-param-reassign
      copyPasta.likes = response.data.likes;
    }
  };

  return (
    <StyledCopyPasta
      onMouseEnter={handleChangeActiveCopyToClipboard}
      onMouseLeave={handleChangeActiveCopyToClipboard}
    >
      <CopyPastaHeader>
        <CopyPastaLikeContainer>
          <button type="button" onClick={() => handleLike(copyPasta.id)}>
            curtir
          </button>
          <button type="button" onClick={() => handleUnlike(copyPasta.id)}>
            descurtir
          </button>
        </CopyPastaLikeContainer>
        {copyPasta.name ? copyPasta.name : t('copyPasta.name')}
      </CopyPastaHeader>
      <CopyPastaContent>
        <UserName>{`${t('copyPasta.user')}: `}</UserName>
        {copyPasta.content}
      </CopyPastaContent>

      {categoriesSplitted.length > 0 && categoriesSplitted[0] !== '' && (
        <Tag.Tags margin="1rem 0">
          {categoriesSplitted.map((category: string, index: number) => (
            <Tag key={index} text={category} />
          ))}
        </Tag.Tags>
      )}

      <CopyPastaFooter>
        {copyPasta.likes}
        pessoas acharam este copyPasta útil
        <CopyPastaDate>{date}</CopyPastaDate>
      </CopyPastaFooter>

      <StyledCopyToClipboard
        className={isActiveCopyToClipboard ? 'active' : ''}
        onClick={() => handleCopyToClipboard(copyPasta.content)}
      >
        {isCopyingToClipboard
          ? t('copyPasta.copiedToClipboard')
          : t('copyPasta.copyToClipboard')}
      </StyledCopyToClipboard>
    </StyledCopyPasta>
  );
};

export default Card;
