import styled from 'styled-components';

const StyledCopyPasta = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.cardBackground};
  border-radius: 0.5rem;
  padding: 1rem 1.5rem;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  user-select: none;

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
  flex-grow: 1;
`;

const UserName = styled.span`
  color: ${props => props.theme.colors.purple};
`;

const CopyPastaFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1.2rem;
  color: ${props => props.theme.colors.secundary};
`;

const StyledCopyToClipboard = styled.div`
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

const CopyPastaDate = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: ${props => props.theme.colors.secundary};
`;

export {
  StyledCopyPasta,
  CopyPastaHeader,
  CopyPastaContent,
  UserName,
  CopyPastaFooter,
  StyledCopyToClipboard,
  CopyPastaDate,
};
