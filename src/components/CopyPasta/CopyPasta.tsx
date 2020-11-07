import React, { useState } from 'react';
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
} from './CopyPasta.styles';

const Card = ({ copyPasta }: CopyPastaProps): React.ReactElement => {
  const [isActiveCopyToClipboard, setIsActiveCopyToClipboard] = useState(false);

  const handleChangeActiveCopyToClipboard = () => {
    setIsActiveCopyToClipboard(!isActiveCopyToClipboard);
  };

  return (
    <StyledCopyPasta
      onMouseEnter={handleChangeActiveCopyToClipboard}
      onMouseLeave={handleChangeActiveCopyToClipboard}
    >
      <CopyPastaHeader>{copyPasta.name}</CopyPastaHeader>
      <CopyPastaContent>
        <UserName>twitchUser: </UserName>
        {/* ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⣴⣶⣶⣦⡄⠀⠀⠀⣿
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡷⣤⡄⠀⠀⠉⠛⠻⠟⠃⠀⠀⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠈⠀⠰⣦⣤⣤⡆⢀⡀⠸⢷⣿⣿
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀⠀⠀⠀⢠⣭⣿⡁⠈⣁⠀⠸⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠀⠀⢰⣦⢸⣿⠟⢃⣼⣿⠇⢠⣿⣿
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⣶⠀⢸⣿⣷⣿⣷⡀⠻⡿⠀⣾⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠁⠀⢀⣾⠟⠀⠘⢿⣿⣿⣿⣧⠀⠀⠸⢿⣿⣿
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⠀⠀⣴⣿⣿⠀⠀⠀⠀⣿⣿⣿⣿⠃⠀⠀⠘⠻⠿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⢀⣼⣿⣿⣿⣄⣀⣀⣠⣿⣿⣿⣏⠀⠀⠀⠀⠀⠀
        ⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀⠀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡦⠀⠀⢀⣤⣤ ⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⢸⣿⣿
        ⣿⣿⣿⣿⣿⣿⣿⠃⠀⠠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⢸⣿⣿ ⣿⣿⣿⣿⡿⠋⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀ ⠈⠹⢿
        ⣿⣿⣿⣿⣀⣀⣀⣠⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣀⠀⠀⠀⣸ */}
        {copyPasta.content}
      </CopyPastaContent>
      <CopyPastaFooter>
        <CopyPastaShareButton>
          <FiFacebook />
          Share
          {copyPasta.date}
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
