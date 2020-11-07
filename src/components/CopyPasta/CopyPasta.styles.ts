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

const StyledCopyPasta = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.cardBackground};
  border-radius: 0.5rem;
  padding: 1rem 1.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-0.7rem);
    cursor: pointer;
    box-shadow: 0 0 1rem -0.5rem ${props => props.theme.colors.purpleLight};
  }
`;

const CopyPastaHeader = styled.div`
  display: flex;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const CopyPastaContent = styled.div`
  display: flex;
  font-size: 1.2rem;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const UserName = styled.span`
  color: ${props => props.theme.colors.purple};
`;

const CopyPastaFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CopyPastaShareButton = styled.button<ShareButtonProps>`
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

const CopyToClipboard = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: ${props => props.theme.colors.purpleLight};
  padding: 0.6rem 1rem;
  text-align: center;
  font-size: 1.6rem;
  opacity: 0;
  transition: all 0.3s ease;
  transform: translateY(100%);

  &.active {
    opacity: 1;
    transform: translateY(0%);
  }
`;

export {
  StyledCopyPasta,
  CopyPastaHeader,
  CopyPastaContent,
  UserName,
  CopyPastaFooter,
  CopyPastaShareButton,
  CopyToClipboard,
};
