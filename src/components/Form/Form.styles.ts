import styled from 'styled-components';

const StyledForm = styled.form`
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
  position: relative;
`;

export { StyledForm, FormItem };
