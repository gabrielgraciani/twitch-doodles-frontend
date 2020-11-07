import React, { useState, useEffect } from 'react';
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
  const language = localStorage.getItem('language');

  const handleChangeActiveCopyToClipboard = () => {
    setIsActiveCopyToClipboard(!isActiveCopyToClipboard);
  };

  const date = format(
    new Date(copyPasta.date),
    " iiii',' dd 'de' MMMM 'de' y",
    {
      locale: language === 'br' ? ptBR : enUS,
    },
  );

  return (
    <StyledCopyPasta
      onMouseEnter={handleChangeActiveCopyToClipboard}
      onMouseLeave={handleChangeActiveCopyToClipboard}
    >
      <CopyPastaHeader>{copyPasta.name}</CopyPastaHeader>
      <CopyPastaContent>
        <UserName>twitchUser: </UserName>
        {copyPasta.content}
      </CopyPastaContent>

      <CopyPastaDate>{date}</CopyPastaDate>

      <CopyPastaFooter>
        <CopyPastaShareButton>
          <FiFacebook />
          Share
        </CopyPastaShareButton>

        <CopyPastaShareButton socialType="twitter">
          <FiTwitter />
          Share
        </CopyPastaShareButton>
      </CopyPastaFooter>

      <CopyToClipboard className={isActiveCopyToClipboard ? 'active' : ''}>
        Copy to clipboard
      </CopyToClipboard>
    </StyledCopyPasta>
  );
};

export default Card;
