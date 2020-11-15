import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import { ptBR, enUS } from 'date-fns/locale';

import CopyToClipboard from '../../utils/CopyToClipboard';
import { Tag } from '../Tag';

import { CopyPastaProps } from './CopyPasta.types';

import {
  StyledCopyPasta,
  CopyPastaHeader,
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

  return (
    <StyledCopyPasta
      onMouseEnter={handleChangeActiveCopyToClipboard}
      onMouseLeave={handleChangeActiveCopyToClipboard}
      onClick={() => handleCopyToClipboard(copyPasta.content)}
    >
      <CopyPastaHeader>
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
        {t('copyPasta.posted')}
        <CopyPastaDate>{date}</CopyPastaDate>
      </CopyPastaFooter>

      <StyledCopyToClipboard
        className={isActiveCopyToClipboard ? 'active' : ''}
      >
        {isCopyingToClipboard
          ? t('copyPasta.copiedToClipboard')
          : t('copyPasta.copyToClipboard')}
      </StyledCopyToClipboard>
    </StyledCopyPasta>
  );
};

export default Card;
