import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import { ptBR, enUS } from 'date-fns/locale';
import { FiFacebook, FiTwitter } from 'react-icons/fi';

import { CopyPastaProps } from './CopyPasta.types';

import {
  StyledCopyPasta,
  CopyPastaHeader,
  CopyPastaContent,
  CopyPastaFooter,
  UserName,
  CopyPastaShareButton,
  CopyToClipboard,
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
    if (!isCopyingToClipboard) {
      navigator.clipboard.writeText(content);

      setIsCopyingToClipboard(true);
      setTimeout(() => {
        setIsCopyingToClipboard(false);
      }, [2000]);
    }
  };

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
      <CopyPastaHeader>{copyPasta.name}</CopyPastaHeader>
      <CopyPastaContent>
        <UserName>{`${t('copyPasta.user')}: `}</UserName>
        {copyPasta.content}
      </CopyPastaContent>

      <CopyPastaDate>{date}</CopyPastaDate>

      <CopyPastaFooter>
        <CopyPastaShareButton>
          <FiFacebook />
          {t('copyPasta.share')}
        </CopyPastaShareButton>

        <CopyPastaShareButton socialType="twitter">
          <FiTwitter />
          {t('copyPasta.share')}
        </CopyPastaShareButton>
      </CopyPastaFooter>

      <CopyToClipboard className={isActiveCopyToClipboard ? 'active' : ''}>
        {isCopyingToClipboard
          ? t('copyPasta.copiedToClipboard')
          : t('copyPasta.copyToClipboard')}
      </CopyToClipboard>
    </StyledCopyPasta>
  );
};

export default Card;
