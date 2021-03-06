import styled from 'styled-components';

const Container = styled.div`
  width: 90%;
  padding: 2rem 0;
  max-width: 110rem;
`;

const CreateHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  color: ${props => props.theme.colors.primary};
`;

const SimpleDoodle = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  color: ${props => props.theme.colors.primary};

  button {
    margin-left: 2rem;
  }

  @media (max-width: 500px) {
    margin-top: 1rem;
  }
`;

const ContainerError = styled.div`
  width: 100%;
`;

const ErrorMessage = styled.div`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.inputError};
`;

const ChooseImageContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

const ChooseImageText = styled.label`
  width: 100%;
  border: 0.1rem solid ${props => props.theme.colors.purpleLight};
  padding: 1rem;
  border-radius: 0.4rem;
  cursor: pointer;
  text-align: center;
  transition: color 0.2s ease, background-color 0.2s ease;

  &:hover {
    color: ${props => props.theme.colors.background};
    background: ${props => props.theme.colors.purpleLight};
  }

  &:active {
    background: ${props => props.theme.colors.purple};
  }
`;
const ChooseImageInput = styled.input`
  position: absolute;
  z-index: -1;
  top: 1.5rem;
  left: 2rem;
  font-size: 1.7rem;
  color: ${props => props.theme.colors.secundary};

  opacity: 0;
  display: none;
`;

const InputTreshold = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 1.5rem;
  background: ${props => props.theme.colors.purpleLight};
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 3rem;
    height: 3rem;
    background: ${props => props.theme.colors.purple};
    border-radius: 50%;
    cursor: pointer;
  }
`;

const ContainerDoodle = styled.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;
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

const ContentDoodle = styled.div``;

export {
  Container,
  CreateHeader,
  Title,
  SimpleDoodle,
  ContainerError,
  ErrorMessage,
  ChooseImageContainer,
  ChooseImageText,
  ChooseImageInput,
  InputTreshold,
  ContentDoodle,
  ContainerDoodle,
  StyledCopyToClipboard,
};
