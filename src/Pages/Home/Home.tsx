import React from 'react';
import { FiFacebook, FiTwitter } from 'react-icons/fi';

import {
  Container,
  CardsContainer,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  UserName,
  CardShareButton,
} from './Home.styles';

const Home = (): React.ReactElement => {
  return (
    <Container>
      <CardsContainer>
        {Array.from(Array(5).keys()).map(() => (
          <Card>
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
            <i className="fa fa-twitter" />
          </Card>
        ))}
      </CardsContainer>
    </Container>
  );
};

export default Home;
