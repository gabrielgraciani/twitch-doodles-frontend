import React, { useState } from 'react';
import { FiFacebook, FiTwitter } from 'react-icons/fi';

import CopyPasta from '../../interfaces/CopyPasta';

import {
  StyledCard,
  CardHeader,
  CardContent,
  CardFooter,
  UserName,
  CardShareButton,
  CopyToClipboard,
} from './Card.styles';

const Card = ({
  name,
  content,
  date,
}: Omit<CopyPasta, 'id'>): React.ReactElement => {
  const [isActiveCopyToClipboard, setIsActiveCopyToClipboard] = useState(false);

  const handleChangeActiveCopyToClipboard = () => {
    setIsActiveCopyToClipboard(!isActiveCopyToClipboard);
  };

  return (
    <StyledCard
      onMouseEnter={handleChangeActiveCopyToClipboard}
      onMouseLeave={handleChangeActiveCopyToClipboard}
    >
      <CardHeader>{name}</CardHeader>
      <CardContent>
        <UserName>twitchUser: </UserName>
        {/* ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⣴⣶⣶⣦⡄⠀⠀⠀⣿
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡷⣤⡄⠀⠀⠉⠛⠻⠟⠃⠀⠀⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠈⠀⠰⣦⣤⣤⡆⢀⡀⠸⢷⣿⣿
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀⠀⠀⠀⢠⣭⣿⡁⠈⣁⠀⠸⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠀⠀⢰⣦⢸⣿⠟⢃⣼⣿⠇⢠⣿⣿
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⣶⠀⢸⣿⣷⣿⣷⡀⠻⡿⠀⣾⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠁⠀⢀⣾⠟⠀⠘⢿⣿⣿⣿⣧⠀⠀⠸⢿⣿⣿
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⠀⠀⣴⣿⣿⠀⠀⠀⠀⣿⣿⣿⣿⠃⠀⠀⠘⠻⠿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⢀⣼⣿⣿⣿⣄⣀⣀⣠⣿⣿⣿⣏⠀⠀⠀⠀⠀⠀
        ⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀⠀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡦⠀⠀⢀⣤⣤ ⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⢸⣿⣿
        ⣿⣿⣿⣿⣿⣿⣿⠃⠀⠠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⢸⣿⣿ ⣿⣿⣿⣿⡿⠋⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀ ⠈⠹⢿
        ⣿⣿⣿⣿⣀⣀⣀⣠⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣀⠀⠀⠀⣸ */}
        {content}
      </CardContent>
      <CardFooter>
        <CardShareButton>
          <FiFacebook />
          Share
          {date}
        </CardShareButton>

        <CardShareButton socialType="twitter">
          <FiTwitter />
          Share
        </CardShareButton>
      </CardFooter>

      <CopyToClipboard className={isActiveCopyToClipboard ? 'active' : ''}>
        Copy to clipboard
      </CopyToClipboard>
    </StyledCard>
  );
};

export default Card;
