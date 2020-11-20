import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import { ptBR, enUS } from 'date-fns/locale';

import CopyToClipboard from '../../utils/CopyToClipboard';
import { Tag } from '../Tag';

import { CopyPastaProps } from './CopyPasta.types';

import CopyPasta from '../../interfaces/CopyPasta';
import useLikeCopyPasta from '../../hooks/useLikeCopyPasta';
import useUnlikeCopyPasta from '../../hooks/useUnlikeCopyPasta';

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

  const [likeCopyPasta] = useLikeCopyPasta();
  const [unlikeCopyPasta] = useUnlikeCopyPasta();

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

  const handleLike = async (value: CopyPasta) => {
    likeCopyPasta(value);
  };

  const handleUnlike = async (value: CopyPasta) => {
    unlikeCopyPasta(value);
  };

  return (
    <StyledCopyPasta
      onMouseEnter={handleChangeActiveCopyToClipboard}
      onMouseLeave={handleChangeActiveCopyToClipboard}
    >
      <CopyPastaHeader>
        <CopyPastaLikeContainer>
          <button type="button" onClick={() => handleLike(copyPasta)}>
            curtir
          </button>
          <button type="button" onClick={() => handleUnlike(copyPasta)}>
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
