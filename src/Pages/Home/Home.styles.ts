import styled, { css } from 'styled-components';

interface ShareButtonProps {
  socialType?: 'facebook' | 'twitter';
}

const buttonTypeVariations = {
  facebook: css`
    background: #4267b2;

    &:hover {
      background: #365899;
    }
  `,
  twitter: css`
    background: #1b95e0;

    &:hover {
      background: #0c7abf;
    }
  `,
};

const Container = styled.div`
  width: 90%;
  max-width: 110rem;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  justify-content: space-between;
  grid-row-gap: 2.5rem;
  grid-column-gap: 3%;
  padding: 2rem 0;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.cardBackground};
  border-radius: 0.5rem;
  padding: 1rem 1.5rem;
`;

const CardHeader = styled.div`
  display: flex;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const CardContent = styled.div`
  display: flex;
  font-size: 1.2rem;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const UserName = styled.span`
  color: ${props => props.theme.colors.purple};
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardShareButton = styled.button<ShareButtonProps>`
  padding: 0.2rem 0.5rem;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  margin-right: 0.8rem;
  transition: all 0.2s ease;
  color: #fff;

  ${props => buttonTypeVariations[props.socialType || 'facebook']}

  &:last-child {
    margin-right: 0;
  }

  svg {
    font-size: 1.7rem;
    margin-right: 0.4rem;

    path {
      color: #fff;
    }
  }
`;

export {
  Container,
  CardsContainer,
  Card,
  CardHeader,
  CardContent,
  UserName,
  CardFooter,
  CardShareButton,
};
