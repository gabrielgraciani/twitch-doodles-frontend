import styled from 'styled-components';

const Container = styled.div`
  width: 90%;
  padding: 2rem 0;
  max-width: 110rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: ${props => props.theme.colors.primary};
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
  justify-content: space-between;
  margin: 1rem 0;
`;

export { Container, Title, Form, FormItem };
