import React, { useState } from 'react';
import { FiFacebook, FiTwitter } from 'react-icons/fi';

import {
  StyledCard,
  CardHeader,
  CardContent,
  CardFooter,
  UserName,
  CardShareButton,
  CopyToClipboard,
} from './Card.styles';

const Card = (): React.ReactElement => {
  const [isActiveCopyToClipboard, setIsActiveCopyToClipboard] = useState(false);

  const handleChangeActiveCopyToClipboard = () => {
    setIsActiveCopyToClipboard(!isActiveCopyToClipboard);
  };
  return (
    <StyledCard
      onMouseEnter={handleChangeActiveCopyToClipboard}
      onMouseLeave={handleChangeActiveCopyToClipboard}
    >
      <CardHeader>Nome do desenho</CardHeader>
      <CardContent>
        <UserName>twitchUser: </UserName>
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⣴⣶⣶⣦⡄⠀⠀⠀⣿
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡷⣤⡄⠀⠀⠉⠛⠻⠟⠃⠀⠀⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠈⠀⠰⣦⣤⣤⡆⢀⡀⠸⢷⣿⣿
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀⠀⠀⠀⢠⣭⣿⡁⠈⣁⠀⠸⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠀⠀⢰⣦⢸⣿⠟⢃⣼⣿⠇⢠⣿⣿
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⣶⠀⢸⣿⣷⣿⣷⡀⠻⡿⠀⣾⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠁⠀⢀⣾⠟⠀⠘⢿⣿⣿⣿⣧⠀⠀⠸⢿⣿⣿
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⠀⠀⣴⣿⣿⠀⠀⠀⠀⣿⣿⣿⣿⠃⠀⠀⠘⠻⠿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⢀⣼⣿⣿⣿⣄⣀⣀⣠⣿⣿⣿⣏⠀⠀⠀⠀⠀⠀
        ⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀⠀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡦⠀⠀⢀⣤⣤ ⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⢸⣿⣿
        ⣿⣿⣿⣿⣿⣿⣿⠃⠀⠠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⢸⣿⣿ ⣿⣿⣿⣿⡿⠋⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀ ⠈⠹⢿
        ⣿⣿⣿⣿⣀⣀⣀⣠⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣀⠀⠀⠀⣸
      </CardContent>
      <CardFooter>
        <CardShareButton>
          <FiFacebook />
          Share
        </CardShareButton>

        <CardShareButton socialType="twitter">
          <FiTwitter />
          Share
        </CardShareButton>
      </CardFooter>

      {isActiveCopyToClipboard && (
        <CopyToClipboard>Copy to clipboard</CopyToClipboard>
      )}
    </StyledCard>
  );
};

export default Card;
