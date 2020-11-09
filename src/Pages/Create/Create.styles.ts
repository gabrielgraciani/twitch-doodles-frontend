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
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  > button {
    margin-top: 1rem;
  }
`;

const FormItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

const ChooseImageContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;
const ChooseImageText = styled.label`
  width: 100%;
  border: 1px solid ${props => props.theme.colors.purpleLight};
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
  top: 15px;
  left: 20px;
  font-size: 17px;
  color: #b8b8b8;
`;

const InputTreshold = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 15px;
  background: ${props => props.theme.colors.purpleLight};
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 30px;
    height: 30px;
    background: ${props => props.theme.colors.purple};
    border-radius: 50%;
    cursor: pointer;
  }
`;

const ContentDoodle = styled.div``;

export {
  Container,
  CreateHeader,
  Title,
  SimpleDoodle,
  Form,
  FormItem,
  ChooseImageContainer,
  ChooseImageText,
  ChooseImageInput,
  InputTreshold,
  ContentDoodle,
};
